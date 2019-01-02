import React from "react";
import PropTypes from "prop-types";
class EditFishForm extends React.Component {
	handleChange = event => {
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};
		this.props.updateFish(this.props.index, updatedFish);
	};
	static propTypes = {
		fish: PropTypes.shape({
			image: PropTypes.string,
			name: PropTypes.string,
			desc: PropTypes.string,
			status: PropTypes.string,
			price: PropTypes.number
		}),
		index: PropTypes.string,
		updateFish: PropTypes.func
	};

	render() {
		return (
			<div className="fish-edit">
				<input
					name="name"
					value={this.props.fish.name}
					ref={this.nameRef}
					type="text"
					onChange={this.handleChange}
				/>
				<input
					name="price"
					ref={this.priceRef}
					type="text"
					value={this.props.fish.price}
					onChange={this.handleChange}
				/>
				<select
					name="status"
					ref={this.statusRef}
					value={this.props.fish.status}
					onChange={this.handleChange}
				>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea
					name="desc"
					ref={this.descRef}
					value={this.props.fish.desc}
					onChange={this.handleChange}
				/>
				<input
					name="image"
					ref={this.imageRef}
					type="text"
					value={this.props.fish.image}
					onChange={this.handleChange}
				/>
				<button
					onClick={() => {
						this.props.deleteFish(this.props.index);
					}}
				>
					Remove Fish
				</button>
			</div>
		);
	}
}
export default EditFishForm;
