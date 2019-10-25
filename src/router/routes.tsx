import React from "react";
import {Route} from "react-router";
import Translation from "../containers/translation/Translation";

export default () => {
  let routes =
    <div className="Main">
      <Route exact path="/" component={Translation} />
    </div>;

  return (
    routes
  );
}
