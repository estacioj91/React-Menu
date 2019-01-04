import React from "react";
import { getFunName } from "../helpers";
import firebase from "firebase";
import base, { firebaseApp } from "../base";
import PropTypes from "prop-types";
class StorePicker extends React.Component {
	constructor(props) {
		super(props);
		this.storeName = this.props.location.state.storeName;
		this.uid = this.props.location.state.uid;
		this.owner = this.props.location.state.owner;
	}
	state = {
		fishes: {}
	};
	//passes user info to next location, could be fixed
	goToStore = event => {
		this.props.history.push({
			pathname: `/store/${this.storeName}/menu`,
			state: {
				uid: this.uid,
				owner: this.owner,
				storeName: this.storeName,
				fishes: this.state.fishes
			}
		});
	};

	goToInventory = event => {
		this.props.history.push({
			pathname: `/store/${this.storeName}/inventory`,
			state: {
				uid: this.uid,
				owner: this.owner,
				fishes: this.state.fishes,
				storeName: this.storeName
			}
		});
	};
	// static propTypes = {
	// 	history: PropTypes.object
	// };
	componentDidMount() {
		if (this.uid !== "default") {
			this.ref = base.syncState(`${this.storeName}/fishes`, {
				context: this,
				state: "fishes"
			});
		} else {
			localStorage.setItem("default", {});
		}
	}
	logout = async () => {
		console.log("logging out ");
		await firebase.auth().signOut();
		this.setState({
			uid: null
		});
		this.props.history.goBack("/");
	};
	render() {
		const logout = <button onClick={this.logout}>Log Out!</button>;
		return (
			<div>
				<div className="store-selector">
					<h2>Welcome</h2>
					<input
						ref={this.myInput}
						type="text"
						required
						placeholder="Store Name"
						defaultValue={this.storeName}
					/>
					<button
						onClick={() => {
							console.log("menu clicked", this.props);
							this.goToStore();
						}}
					>
						Visit Store
					</button>
					{/*Sample comment*/}
					<button
						onClick={() => {
							console.log("inventory clicked", this.props);
							this.goToInventory();
						}}
					>
						Inventory
					</button>
					{logout}
				</div>
			</div>
		);
	}
}

export default StorePicker;
