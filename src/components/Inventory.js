import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import firebase from "firebase";
import PropTypes from "prop-types";
import base, { firebaseApp } from "../base";
import sampleFishes from "../sample-fishes";
import sampleCuts from "../sample-cuts";
import { parse } from "url";
class Inventory extends React.Component {
	constructor(props) {
		super(props);

		this.storeName = this.props.location.state.storeName;
		this.uid = this.props.location.state.uid;
		this.owner = this.props.location.state.owner;
		this.fishes = this.props.location.state.fishes;
		this.cuts = this.props.location.state.cuts;

		this.state = {
			uid: this.uid,
			owner: this.owner,
			fishes: this.fishes,
			cuts: this.cuts
		};
	}

	// static propTypes = {
	// 	updateFish: PropTypes.func,
	// 	fishes: PropTypes.object,
	// 	deleteFish: PropTypes.func,
	// 	loadSampleFishes: PropTypes.func
	// };
	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};
	loadSampleCuts = () => {
		this.setState({ cuts: sampleCuts });
	};

	addFish = fish => {
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
	updateCut = (key, updateCut) => {
		const cuts = { ...this.state.cuts };
		cuts[key] = updateCut;
		this.setState({ cuts });
	};
	deleteFish = key => {
		const fishes = { ...this.state.fishes };
		fishes[key] = null;
		this.setState({ fishes });

		const localStorageRef = localStorage.getItem("guest-fishes");

		if (localStorageRef) {
			delete fishes[key];
			localStorage.setItem("guest-fishes", JSON.stringify(fishes));
		}
	};
	deleteCuts = key => {
		const cuts = { ...this.state.cuts };
		cuts[key] = null;
		this.setState({ cuts });

		const localStorageRef = localStorage.getItem("guest-cuts");

		if (localStorageRef) {
			delete cuts[key];
			localStorage.setItem("guest-cuts", JSON.stringify(cuts));
		}
	};
	logout = async () => {
		await firebase.auth().signOut();
		this.setState({
			uid: null
		});

		this.props.history.go(-2);
	};
	returnToOptions = async () => {
		this.props.history.goBack(`/${this.storeName}`);
	};
	componentDidUpdate() {
		const localStorageRef = localStorage.getItem("guest-fishes");
		if (localStorageRef) {
			const fishesObj = JSON.stringify(this.state.fishes);
			localStorage.setItem(
				"guest-fishes",
				JSON.stringify(this.state.fishes)
			);
		}

		const localStorageRefCuts = localStorage.getItem("guest-cuts");
		if (localStorageRefCuts) {
			const cutsObj = JSON.stringify(this.state.cuts);
			localStorage.setItem("guest-cuts", JSON.stringify(this.state.cuts));
		}
	}
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
				this.setState({ fishes: JSON.parse(localStorageRef) });
			}

			const localStorageRefCuts = localStorage.getItem("guest-cuts");

			if (localStorageRefCuts) {
				this.setState({ cuts: JSON.parse(localStorageRefCuts) });
			}
		}
	}
	render() {
		const logout = <button onClick={this.logout}>Log Out!</button>;
		const back = <button onClick={this.returnToOptions}>Back</button>;
		return (
			<div className="catch-of-the-day">
				<div className="inventory">
					<h2>Inventory</h2>
					{back}
					{this.storeName === "default" ? "" : logout}
					{Object.keys(this.state.fishes).map(key => (
						<EditFishForm
							updateItem={this.updateFish}
							key={key}
							index={key}
							fish={this.state.fishes[key]}
							deleteItem={this.deleteFish}
						/>
					))}
					<AddFishForm addFish={this.addFish} />
					<button onClick={this.loadSampleFishes}>
						Load Sample Fishes
					</button>
				</div>
				<div className="inventory">
					<h2>Inventory</h2>
					{Object.keys(this.state.cuts).map(key => (
						<EditFishForm
							updateItem={this.updateCut}
							key={key}
							index={key}
							fish={this.state.cuts[key]}
							deleteItem={this.deleteCuts}
						/>
					))}
					<AddFishForm addFish={this.addFish} />
					<button onClick={this.loadSampleCuts}>Load Sample Steaks</button>
				</div>
			</div>
		);
	}
}

export default Inventory;
