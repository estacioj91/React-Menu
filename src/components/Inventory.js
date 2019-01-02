import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import firebase from "firebase";
import PropTypes from "prop-types";
import base, { firebaseApp } from "../base";
class Inventory extends React.Component {
	state = {
		uid: null,
		owner: null
	};

	static propTypes = {
		updateFish: PropTypes.func,
		fishes: PropTypes.object,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	};
	authHandler = async authData => {
		const store = await base.fetch(this.props.storeId, { context: this });
		if (!store.ownder) {
			await base.post(`${this.props.storeId}/owner`, {
				data: authData.user.uid
			});
		}
		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid
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
		console.log("logging out ");
		await firebase.auth().signOut();
		this.setState({
			uid: null
		});
	};

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.authHandler({ user });
			}
		});
	}
	componentWillUnmount() {
		this.logout();
	}
	render() {
		const logout = <button onClick={this.logout}>Log Out!</button>;

		if (!this.state.uid) {
			return <Login authenticate={this.authenticate} />;
		}
		if (this.state.uid !== this.state.owner) {
			return (
				<div>
					<p>Sorry you are not the owner!</p>
					{logout}
				</div>
			);
		}
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				{logout}
				{Object.keys(this.props.fishes).map(key => (
					<EditFishForm
						updateFish={this.props.updateFish}
						key={key}
						index={key}
						fish={this.props.fishes[key]}
						deleteFish={this.props.deleteFish}
					/>
				))}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSampleFishes}>
					Load Sample Fishes
				</button>
			</div>
		);
	}
}

export default Inventory;
