import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import PropTypes from "prop-types";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.storeName = this.props.location.state.storeName;
		this.uid = this.props.location.state.uid;
		this.owner = this.props.location.state.owner;
		this.fishes = this.props.location.state.fishes;
	}
	state = {
		order: {}
	};

	static propTypes = {
		match: PropTypes.object
	};

	componentDidMount() {
		const { params } = this.props.match;
		const localStorageRef = localStorage.getItem(params.storeId);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: "fishes"
		});
	}

	componentWillUnmount() {
		//stops database from checking/cleans up
		base.removeBinding(this.ref);
	}

	componentDidUpdate() {
		localStorage.setItem(
			this.props.match.params.storeId,
			JSON.stringify(this.state.order)
		);
	}

	addToOrder = key => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	};
	removeFromOrder = key => {
		const order = { ...this.state.order };
		delete order[key];
		this.setState({ order });
	};
	returnToOptions = () => {
		console.log("returning");
		console.log("history", this.props.history);
		this.props.history.goBack(`/${this.storeName}`);
	};
	render() {
		const back = <button onClick={this.returnToOptions}>Back</button>;
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					{back}
					<Header tagline="FRESH SEAFOOD MARKET" />
					<ul className="fishes">
						{Object.keys(this.fishes).map(key => (
							<Fish
								key={key}
								index={key}
								details={this.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order
					fishes={this.fishes}
					order={this.state.order}
					removeFromOrder={this.removeFromOrder}
				/>
				{/* <Inventory
					returnToMenu={this.returnToMenu}
					loginInfo={this.loginInfo}
					storeId={this.storeName}
					updateFish={this.updateFish}
					fishes={this.state.fishes}
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
					deleteFish={this.deleteFish}
				/> */}
				<div className="menu">
					<Header tagline="FRESH SEAFOOD MARKET" />
					<ul className="fishes">
						{Object.keys(this.fishes).map(key => (
							<Fish
								key={key}
								index={key}
								details={this.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
