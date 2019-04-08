import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="img" />} />
        <Route path="/skills" render={() => <img src={img2} alt="img" />} />
        <Route path="/projects" render={() => <img src={img3} alt="img" />} />
        <Route path="/contact" render={() => <img src={img4} alt="img" />} />
        <Route render={() => <img src={img1} alt="img" />} />
      </Switch>
    </>
  );
};

export default Header;
