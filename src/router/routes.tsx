import React from "react";
import { Route } from "react-router";
import Translation from "../containers/translation/Translation";
import Contact from "../containers/contact/Contact";
import LibraryList from "../components/admin/libraryList/LibraryList";
import Login from "../components/login/Login";

export default () => {
  return (
    <div className="Main">
      <Route exact path="/" component={Translation} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin/library" component={LibraryList} />
      <Route exact path="/admin" component={Login} />
    </div>
  );
};
