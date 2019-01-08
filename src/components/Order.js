import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

class Order extends React.Component {
	// static propTypes = {
	// 	fishes: PropTypes.object,
	// 	order: PropTypes.object,
	// 	removeFromOrder: PropTypes.func
	// };
	componentDidMount() {}
	renderOrder = key => {
		const fish = this.props.fishes[key] || {};
		const cuts = this.props.cuts[key] || {};
		const count = this.props.order[key];
		const transitionOptions = {
			classNames: "order",
			key: key,
			timeout: { enter: 500, exit: 500 }
		};
		//if (!fish) return null;
		// if (!cuts) return null;

		const isAvailable =
			(fish && fish.status === "available") ||
			(cuts && cuts.status === "available");
		if (!isAvailable) {
			return (
				<CSSTransition {...transitionOptions}>
					<li>Sorry {fish ? fish.name : "fish"} is no longer avaiable</li>
				</CSSTransition>
			);
		}
		return (
			<CSSTransition {...transitionOptions}>
				<li key={key}>
					<span>
						<TransitionGroup component="span" className="count">
							<CSSTransition
								classNames="count"
								key={count}
								timeout={{ enter: 500, exit: 500 }}
							>
								<span>{count}</span>
							</CSSTransition>
						</TransitionGroup>
						{fish.name ? "lbs" : "-"} {fish.name || cuts.name}{" "}
						{formatPrice(count * (fish.price || cuts.price))}
						<button
							onClick={() => {
								this.props.removeFromOrder(key);
							}}
						>
							&times;
						</button>
					</span>
				</li>
			</CSSTransition>
		);
	};
	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key] || {};
			const cuts = this.props.cuts[key] || {};
			const count = this.props.order[key];
			const isAvailable =
				(fish && fish.status === "available") ||
				(cuts && cuts.status === "available");
			if (isAvailable) {
				return prevTotal + count * (fish.price || cuts.price);
			}
			return prevTotal;
		}, 0);
		return (
			<div className="order-wrap">
				<h2>Order</h2>
				<TransitionGroup component="ul" className="order">
					{orderIds.map(this.renderOrder)}
				</TransitionGroup>

				<div className="total">
					<strong>Total: {formatPrice(total)}</strong>
				</div>
			</div>
		);
	}
}

export default Order;
