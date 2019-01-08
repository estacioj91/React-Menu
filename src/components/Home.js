import React from "react";
import Login from "./Login";
import firebase from "firebase";
import PropTypes from "prop-types";
import base, { firebaseApp } from "../base";
class Home extends React.Component {
	state = {
		uid: null,
		owner: null,
		storeName: null,
		fishes: {},
		cuts: {}
	};
	authHandler = async authData => {
		var storeName = authData.additionalUserInfo.profile.name;
		storeName = storeName.replace(/\s+/g, "-");
		this.setState({
			storeName
		});
		//returns store from database
		const store = await base.fetch(storeName, { context: this });

		//load database fishes into state.
		this.setState({ fishes: store.fishes, cuts: store.cuts });

		//if store has no owner, we set owner to uid returned
		//from authData
		if (!store.owner) {
			await base.post(`${storeName}/owner`, {
				data: authData.user.uid
			});
		}
		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid
		});
		//push state data to storepicker.js with our
		//store name in the url

		this.props.history.push({
			pathname: `/store/${storeName}`,
			state: {
				uid: this.state.uid,
				owner: this.state.owner,
				storeName: this.state.storeName,
				fishes: this.state.fishes,
				cuts: this.state.cuts
			}
		});
	};
	authenticate = provider => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		firebaseApp
			.auth()
			.signInWithPopup(authProvider)
			.then(this.authHandler);
	};
	logout = async () => {
		await firebase.auth().signOut();
		this.setState({
			uid: null
		});
	};
	guestView = () => {
		this.props.history.push({
			pathname: `/store/default`,
			state: {
				uid: "default",
				owner: "default",
				storeName: "default"
			}
		});
	};
	componentDidMount() {
		localStorage.clear();
	}
	componentWillUnmount() {
		// this.logout();
	}
	render() {
		return (
			<div>
				<section className="store-selector">
					<Login authenticate={this.authenticate} />
					<button className="facebook" onClick={this.guestView}>
						Continue as Guest
					</button>
				</section>
			</div>
		);
	}
}
export default Home;
