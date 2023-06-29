import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import IndividualFurniture from "./IndividualFurniture";
import { store } from "./redux/reduxStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store ={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/details/:id" element={<IndividualFurniture />}></Route>
				{/* <Route path="/" element={<Home />}></Route> */}
			</Routes>
		</BrowserRouter>
	</Provider>
);
