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
		fishes: {},
		cuts: {}
	};
	//passes user info to next location, could be fixed
	goToStore = event => {
		this.props.history.push({
			pathname: `/store/${this.storeName}/menu`,
			state: {
				uid: this.uid,
				owner: this.owner,
				storeName: this.storeName,
				fishes: this.state.fishes,
				cuts: this.state.cuts
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
				cuts: this.state.cuts,
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
			this.ref = base.syncState(`${this.storeName}/cuts`, {
				context: this,
				state: "cuts"
			});
		} else {
			const localStorageRef = localStorage.getItem("guest-fishes");
			if (localStorageRef) {
			} else {
				localStorage.setItem(
					"guest-fishes",
					JSON.stringify(this.state.fishes)
				);
				localStorage.setItem("guest-cuts", JSON.stringify(this.state.cuts));
			}
			const localStorageRefCuts = localStorage.getItem("guest-cuts");
			if (localStorageRefCuts) {
			} else {
				localStorage.setItem(
					"guest-cuts",
					JSON.stringify(this.state.fishes)
				);
				localStorage.setItem("guest-cuts", JSON.stringify(this.state.cuts));
			}
		}
	}
	logout = async () => {
		await firebase.auth().signOut();
		this.setState({
			uid: null
		});
		this.props.history.goBack("/");
	};
	render() {
		const logout = (
			<button onClick={this.logout}>
				{this.storeName === "default" ? "back" : "Log Out!"}
			</button>
		);
		return (
			<div>
				<div className="store-selector">
					<h2>Welcome</h2>
					<input
						ref={this.myInput}
						type="text"
						required
						placeholder="Store Name"
						defaultValue={
							this.storeName === "default" ? "Guest" : this.storeName
						}
					/>
					<button
						onClick={() => {
							this.goToStore();
						}}
					>
						Visit Store
					</button>
					{/*Sample comment*/}
					<button
						onClick={() => {
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
