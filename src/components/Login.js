import React from "react";
import PropTypes from "prop-types";
const Login = props => (
	<nav>
		<h2>Login</h2>
		<p>Sign in to manage your store's inventory.</p>
		<button
			className="facebook"
			onClick={event => {
				props.authenticate("Facebook");
			}}
		>
			Log In With Facebook
		</button>
	</nav>
);
// Login.propTypes = {
// 	authenticate: PropTypes.func.isRequired
// };

export default Login;
