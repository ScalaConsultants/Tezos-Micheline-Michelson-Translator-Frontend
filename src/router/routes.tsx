import React from 'react';
import { Route } from 'react-router';
import Translation from '../containers/translation/Translation';
import Contact from '../containers/contact/Contact';

export default () => {
  let routes = (
    <div className="Main">
      <Route exact path="/" component={Translation} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );

  return routes;
};
