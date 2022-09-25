import './App.css';
import React from "react";
import Router from "./components/Router/Router";
import ApiState from "./context/apiState";


function App() {
	return (
	   <ApiState>
		   <Router/>
	   </ApiState>
	)
}

export default App;
