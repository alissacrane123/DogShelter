import React from "react";
import { useSelector, useDispatch } from "react-redux";


import DogForm from './dogForm';
import DogItem from "./dogItem";
import SVG from '../svg';

const DogIndex = (props) => {
	const dispatch = useDispatch();
	const { dogs, session: {isShelter, id} } = useSelector((state) => state);

	const dogItems = Object.values(dogs).map((dog, i) => {
		return <DogItem dog={dog} key={i} />;
	});

  const createDogItem = (
		<li className="dog-item new-dog-item">
			<SVG name="paw" fillRule="evenodd" clipRule="evenodd" cn="paw-svg new-dog-svg" />
			<h1 className="dog-item-h1">Add a new dog!</h1>
		</li>
	);


	return (
		<div className="dog-index">
			<ul className="dog-list">
				{isShelter ? createDogItem : null}
				{dogItems}
			</ul>
		</div>
	);
};

export default DogIndex;
