import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import ScalacLogo from "./ScalacLogo";
import "./style.scss";
import Title from "./Title";


const MenuAppBar = (props: any) => {
  const menuItems = [
    { name: 'Home', route: '/'},
    { name: 'Translation', route: '/translation'}
  ];

  const goTo = (route: string) => {
    props.history.push(route);
  };

  return (
      <div className="AppBar">
        <img className="AppBar__scalac" src="scalac.svg" alt="" />
        <Title />
        <img className="AppBar__scalac-transparent" src="scalac-transparent.svg" alt="" />
        <button onClick={() => goTo('/translation')}><img src="Dashboard.svg" alt="" /> Translate</button>
        <button onClick={() => goTo('/translation')}><img src="Mail.svg" alt="" /> Contact</button>
        <button onClick={() => goTo('/translation')}><img src="Info.svg" alt="" /> Info</button>
      </div>
    );
};

export default withRouter(MenuAppBar);
