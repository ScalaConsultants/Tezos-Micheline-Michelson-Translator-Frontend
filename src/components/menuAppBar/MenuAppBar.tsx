import React from 'react';
import {withRouter} from 'react-router-dom';
import "./style.scss";
import Title from "./Title";


const MenuAppBar = (props: any) => {
  const goTo = (route: string) => {
    props.history.push(route);
  };

  const goScalac = () => {
    window.open("https://scalac.io", "_blank");
  };

  return (
      <div className="AppBar">
        <img className="AppBar__scalac" src="scalac.svg" alt="" onClick={() => goScalac()} />
        <Title />
        <img className="AppBar__scalac-transparent" src="scalac-transparent.svg" title="Go to Scalac homepage" alt="Go to Scalac homepage" />
        <button onClick={() => goTo('/')}><img src="dashboard.svg" alt="" /> Translate</button>
        <button onClick={() => goTo('/contact')}><img src="mail.svg" alt="" /> Contact</button>
        <button onClick={() => goTo('/')}><img src="info.svg" alt="" /> Info</button>
      </div>
    );
};

export default withRouter(MenuAppBar);
