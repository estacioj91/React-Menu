import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React from "react";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";
import Home from "./Home";
import Inventory from "./Inventory";
const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/store/:storeId/menu" component={App} />
			<Route path="/store/:storeId/inventory" component={Inventory} />
			<Route path="/store/:storeId" component={StorePicker} />
			<Route component={NotFound} />
			<Route />
		</Switch>
	</BrowserRouter>
);

export default Router;
