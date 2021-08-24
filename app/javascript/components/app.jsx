import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Link, withRouter } from "react-router-dom";

import { fetchDogs } from "../redux/actions/dogActions";

// import Session from "./home/session";
import DogForm from "./dog/dogForm";
import DogIndex from './dog/dogIndex';
import Navbar from './navbar/navbar';
import Modal from './modal/modal';

import DogContainer from './dog/dogContainer'

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

        <Switch>
          {/* <Route path="/dogs/:dogId" component={DogContainer} /> */}
          <Route path="/" component={DogIndex} />
        </Switch>
		
			</div>
		</div>
	);
};

export default App;
