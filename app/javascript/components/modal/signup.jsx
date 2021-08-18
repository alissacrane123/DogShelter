import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createUser, createShelter } from "../../redux/actions/sessionActions.js";

const Signup = (props) => {
	const dispatch = useDispatch();

	const [userType, setUserType] = useState(null);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [username, setUsername] = useState("");
	const [shelterName, setShelterName] = useState("");

  function handleSubmit() {
    let user;
    if (userType === 'shelter') {
      user = { username, name:shelterName, password}
      dispatch(createShelter(user))
    } else {
      user = { firstName, lastName, email, password}
      dispatch(createUser(user))
    }
  }

	if (!userType) {
    return (

		<div className="session">
			<button onClick={() => setUserType("foster")} className="choose-button">
				I want to foster
			</button>
			<button onClick={() => setUserType("shelter")} className="choose-button">
				I manage a shelter
			</button>
			<button onClick={() => setUserType("adopt")} className="choose-button">
				I want to adopt
			</button>
		</div>
    )

	} else if (userType === "shelter") {

		return (
			<div className="session form">
				<h1>Sign Up Below</h1>

				<label className="session-label">Shelter Name</label>
				<input
					className="session-input"
					type="text"
					value={shelterName}
					onChange={(e) => setShelterName(e.target.value)}
				/>

				<label className="session-label">Username</label>
				<input
					className="session-input"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label className="session-label">Password</label>
				<input
					className="session-input"
					type="text"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button onClick={handleSubmit}>Submit</button>
			</div>
		);

	} else {

		return (
			<div className="session form">
				<h1>Sign Up Below</h1>

				<div className="session-div">
					<label className="session-label">First Name</label>
					<input
						className="session-input"
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<label className="session-label">Last Name</label>
					<input
						className="session-input"
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>

				<label className="session-label">Email</label>
				<input
					className="session-input"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label className="session-label">Password</label>
				<input
					className="session-input"
					type="text"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button onClick={handleSubmit}>Submit</button>
			</div>
		);
	}
};

export default Signup;
