import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Image from "images/biggie.jpeg";
import SVG from "../svg";

const DogContainer = (props) => {
	const { dogs } = useSelector((state) => state);

	const {
		match: {
			params: { dogId },
		},
	} = props;

	const { name, age, breed, status, id } = dogs[dogId];


	return (
		<div className="dog-cont">
			<h1 className="dog-item-h1">{name}</h1>
		</div>
	);
};

export default withRouter(DogContainer);
