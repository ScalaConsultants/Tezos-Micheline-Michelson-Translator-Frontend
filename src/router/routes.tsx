import React from "react";
import {Route} from "react-router";
import Home from "../containers/home/Home";
import Translation from "../containers/translation/Translation";
import Contact from "../containers/contact/Contact";

export default () => {

  let routes =
    <div className="Main">
      <Route exact path="/" component={Home} />
      <Route exact path="/translation" component={Translation} />
      <Route exact path="/contact" component={Contact} />
    </div>;

  return (
    routes
  );
}
