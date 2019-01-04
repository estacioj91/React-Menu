import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import firebase from "firebase";
import PropTypes from "prop-types";
import base, { firebaseApp } from "../base";
import sampleFishes from "../sample-fishes";
class Inventory extends React.Component {
	constructor(props) {
		super(props);
		console.log("constuctor-invetory", this.props);
		this.storeName = this.props.location.state.storeName;
		this.uid = this.props.location.state.uid;
		this.owner = this.props.location.state.owner;
		this.fishes = this.props.location.state.fishes;
	}
	state = {
		uid: this.uid,
		owner: this.owner,
		fishes: {},
		cuts: {}
	};

	// static propTypes = {
	// 	updateFish: PropTypes.func,
	// 	fishes: PropTypes.object,
	// 	deleteFish: PropTypes.func,
	// 	loadSampleFishes: PropTypes.func
	// };
	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addFish = fish => {
		console.log("adding a fish");
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish;
		this.setState({
			fishes
		});
	};
	updateFish = (key, updateFish) => {
		const fishes = { ...this.state.fishes };
		fishes[key] = updateFish;
		this.setState({ fishes });
	};
	deleteFish = key => {
		const fishes = { ...this.state.fishes };
		fishes[key] = null;
		this.setState({ fishes });
		console.log(this.state.fishes);
	};
	logout = async () => {
		console.log("logging out ");
		await firebase.auth().signOut();
		this.setState({
			uid: null
		});
		console.log(this.props);
		this.props.history.go(-2);
	};
	returnToOptions = async () => {
		console.log("returning");
		console.log("history", this.props.history);
		this.props.history.goBack(`/${this.storeName}`);
	};
	componentDidMount() {
		if (this.uid !== "default") {
			this.ref = base.syncState(`${this.storeName}/fishes`, {
				context: this,
				state: "fishes"
			});
		} else {
			const localStorageRef = localStorage.getItem("default");
			if (localStorageRef) {
				console.log("inventory mount");
			}
		}
	}
	render() {
		console.log(this.fishes);
		const logout = <button onClick={this.logout}>Log Out!</button>;
		const back = <button onClick={this.returnToOptions}>Back</button>;
		return (
			<div className="catch-of-the-day">
				<div className="inventory">
					<h2>Inventory</h2>
					{back}
					{logout}
					{Object.keys(this.state.fishes).map(key => (
						<EditFishForm
							updateFish={this.updateFish}
							key={key}
							index={key}
							fish={this.state.fishes[key]}
							deleteFish={this.deleteFish}
						/>
					))}
					<AddFishForm addFish={this.addFish} />
					<button onClick={this.loadSampleFishes}>
						Load Sample Fishes
					</button>
				</div>
				<div className="inventory">
					<h2>Inventory</h2>
					{Object.keys(this.state.fishes).map(key => (
						<EditFishForm
							updateFish={this.updateFish}
							key={key}
							index={key}
							fish={this.state.fishes[key]}
							deleteFish={this.deleteFish}
						/>
					))}
					<AddFishForm addFish={this.addFish} />
					<button onClick={this.loadSampleFishes}>
						Load Sample Fishes
					</button>
				</div>
			</div>
		);
	}
}

export default Inventory;
