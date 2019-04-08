import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "o mnie", path: "/", exact: true },
  { name: "umiejętności", path: "/skills" },
  { name: "projekty", path: "/projects" },
  { name: "kontakt", path: "/contact" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <div className="navigation">
      <p className="nameAndSurname">Maksymilian Dąbrowski - portfolio </p>
      <nav className="main">
        <ul>{menu}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
