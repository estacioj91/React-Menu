import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import StorePicker from "./StorePicker";
import App from "./App"
import NotFound from "./NotFound"
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}>
            </Route>
            <Route path="/store/:storeId" component={App}>
            </Route>
            <Route component={NotFound}>
            </Route>
            <Route>
            </Route>
        </Switch>

    </BrowserRouter>
)

export default Router;