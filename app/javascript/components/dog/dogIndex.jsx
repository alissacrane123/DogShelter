import React from "react";
import { useSelector } from "react-redux";

import Image from "images/biggie.jpeg";
import SVG from '../svg';

const DogIndex = (props) => {
	const { dogs } = useSelector((state) => state);

	const dogItems = Object.values(dogs).map((dog, i) => {
		const { name, age, breed, status, desc } = dog;

		return (
			<li className="dog-item" key={i}>
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
	});

	return (
		<div className="dog-index">
			<ul className="dog-list">{dogItems}</ul>
		</div>
	);
};

export default DogIndex;
