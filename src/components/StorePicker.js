import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";
class StorePicker extends React.Component {
	myInput = React.createRef();
	goToStore = event => {
		event.preventDefault();
		const storeName = this.myInput.current.value;
		this.props.history.push(`/store/${storeName}`);
	};
	static propTypes = {
		history: PropTypes.object
	};
	render() {
		return (
			<div>
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Enter a Store</h2>
					<input
						ref={this.myInput}
						type="text"
						required
						placeholder="Store Name"
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit Store </button>
					{/*Sample comment*/}
					<button>Inventory</button>
				</form>
			</div>
		);
	}
}

export default StorePicker;
