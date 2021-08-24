import React from "react";
import { useSelector } from "react-redux";
// import { withRouter } from "react-router-dom";

import Image from "images/biggie.jpeg";
import SVG from "../svg";

import { titleize } from "../helpers";

const DogProfile = (props) => {
	const { dogs } = useSelector((state) => state);

	const { dogId } = props;

	const { name, age, breed, status, id, desc, weight, gender } = dogs[dogId];
	const dog = { age, breed, location: status, weight, gender };

	let parsedDesc = desc.split("\n").map((d, i) => (
		<p className="dog-desc-p" key={i}>
			{d}
		</p>
	));

	let items = Object.keys(dog).map((key, i) => {
		let val = dog[key] ? dog[key] : "---";
    val = key === 'age' ? `${age} years old`: val;
    val = key === 'location' ? `in ${status}` : val;
		return (
			<div className="dog-profile-div">
				<label className="dog-profile-label">{titleize(key)}</label>
				<p className="dog-profile-p">{val}</p>
			</div>
		);
	});

	return (
		<div className="dog-profile">
			<div className="dog-profile-top">
				<h1 className="dog-profile-h1">{name}</h1>
				<div className="dog-profile-img-cont">
					<img src={Image} className="dog-item-img" />
				</div>

        <div className='profile-buttons'>
          <button className='dog-profile-button'>Adopt</button>
          <button className='dog-profile-button'>Foster</button>
        </div>

			</div>

			<div className="dog-profile-bottom">
				<div className="dog-profile-info">{items}</div>
				<div className="dog-desc">{parsedDesc}</div>
			</div>

			<div className=""></div>
		</div>
	);
};

export default DogProfile;
