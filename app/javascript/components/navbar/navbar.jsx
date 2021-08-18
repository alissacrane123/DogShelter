import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SVG from "../svg";

import { setModal } from "../../redux/actions/uiActions";

const Navbar = (props) => {
	const dispatch = useDispatch();

	const {
		session: { id, isShelter, name, firstName },
	} = useSelector((state) => state);

	function handleClick(modal) {
		dispatch(setModal(modal));
	}

	return (
		<nav className="navbar">
			<SVG name="paw" fillRule="evenodd" clipRule="evenodd" cn="nav-svg" />
			{id ? (
				<div className="navbar-div">
					<h1 className='navbar-h1'>{`Welcome, ${isShelter ? name : firstName}`}</h1>
				</div>
			) : (
				<div className="navbar-div">
					<button onClick={() => handleClick("signup")} className="nav-button">
						Sign Up
					</button>
					<button
						onClick={() => handleClick("login")}
						className="nav-button log-button"
					>
						Log In
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
