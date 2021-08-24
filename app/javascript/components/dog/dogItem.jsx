import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { withRouter } from "react-router-dom";

import Image from "images/biggie.jpeg";
import SVG from "../svg";

import { setModal } from "../../redux/actions/uiActions";

const DogItem = (props) => {
	const dispatch = useDispatch();
	const { dog } = props;
	const { name, age, breed, status, id } = dog;

	function handleClick(modal) {
		dispatch(setModal(modal));
	}

	return (
		<li className="dog-item" onClick={() => handleClick(`dog-${id}`)}>
			<div className="dog-item-img-cont">
				<img src={Image} className="dog-item-img" />
			</div>

			<h1 className="dog-item-h1">{name}</h1>

			<div className="dog-item-div">
				<SVG name="paw" fillRule="evenodd" clipRule="evenodd" cn="paw-svg" />
				<label className="dog-item-label">{`${age} year${
					age > 1 ? "s" : ""
				} old ${breed}`}</label>
			</div>

			<div className="dog-item-div">
				<SVG
					name="location"
					fillRule="evenodd"
					clipRule="evenodd"
					cn="location-svg"
				/>
				<label className="dog-item-label">{`In ${status}`}</label>
			</div>
		</li>
	);
};

export default DogItem;
