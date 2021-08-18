import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createDog } from '../../redux/actions/dogActions';

const DogForm = (props) => {
  const dispatch = useDispatch();
  const { session: { id } } = useSelector(state => state);

	const [userId, setUserId] = useState(1);
	const [name, setName] = useState("");
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState(1);

  function handleSubmit() {
    const dog = { name, breed, age, userId }
    dispatch(createDog(dog))
  }

	return (
		<div className="form dog-form">
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="text"
				value={breed}
				onChange={(e) => setBreed(e.target.value)}
			/>
			<input
				type="text"
				value={age}
				onChange={(e) => setAge(e.target.value)}
			/>

			<button onClick={handleSubmit}>
				Create Dog
			</button>
		</div>
	);
};

export default DogForm;
