import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDogs } from "../redux/actions/dogActions";

// import Session from "./home/session";
import DogForm from "./dog/dogForm";
import DogIndex from './dog/dogIndex';
import Navbar from './navbar/navbar';
import Modal from './modal/modal';


const App = () => {
  const dispatch = useDispatch();

  const { ui: { modal }} = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchDogs())
  }, [])
	return (
		<div className="app">
			<Navbar />
      { modal ? <Modal modal={modal}/> : null}
			<div className="app-body">
				{/* <Session /> */}
				<DogForm />
				<DogIndex />
			</div>
		</div>
	);
};

export default App;
