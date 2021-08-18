import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDogs } from "../redux/actions/dogActions";

import Session from "./home/session";
import DogForm from "./dog/dogForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs())
  }, [])
	return (
		<div className="app">
			<Session />
			<DogForm />
		</div>
	);
};

export default App;
