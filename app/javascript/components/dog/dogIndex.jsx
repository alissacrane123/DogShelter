import React from "react";
import { useSelector, useDispatch } from "react-redux";



import DogItem from "./dogItem";

const DogIndex = (props) => {
	const dispatch = useDispatch();
	const { dogs } = useSelector((state) => state);

	const dogItems = Object.values(dogs).map((dog, i) => {
		return <DogItem dog={dog} key={i} />;
	});

	return (
		<div className="dog-index">
			<ul className="dog-list">{dogItems}</ul>
		</div>
	);
};

export default DogIndex;
