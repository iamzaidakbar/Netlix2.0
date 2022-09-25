import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChooseAvatar from "../ChooseAvatar/choose-avatar";
import Home from "../Home/Home";
import React from "react";

export default function Router() {

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<ChooseAvatar/>}></Route>
					<Route path="home" element={<Home/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>);
}