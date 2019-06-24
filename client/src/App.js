import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

import "./App.css";

const App = () => (
  //Fragment is a ghost element which will not show up in the dom
  <Fragment>
    <Navbar />
    <Landing />
  </Fragment>
);

export default App;
