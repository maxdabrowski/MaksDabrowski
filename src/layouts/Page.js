import React from "react";
import { Route, Switch } from "react-router-dom";
import AbautMe from "../pages/AbautMe";
import Skills from "../pages/Skills";
import ProjectsList from "../pages/ProjectsList";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AbautMe} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={ProjectsList} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Page;
