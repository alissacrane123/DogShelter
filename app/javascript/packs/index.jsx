// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";

import configureStore from "../redux/store/store"
import Root from "../components/root";

document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();

	window.getState = store.getState;
	window.dispatch = store.dispatch;
 
	ReactDOM.render(
		<Root store={store} />,
		document.body.appendChild(document.createElement("div"))
	);
});
