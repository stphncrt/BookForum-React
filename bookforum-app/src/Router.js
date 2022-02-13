import React from "react";
import { BookDetail } from "./pages/bookDetailPage";
import { MainPage } from "./pages/MainPage/mainPage";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/detail" component={BookDetail} />
				<Route path="/" component={MainPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
