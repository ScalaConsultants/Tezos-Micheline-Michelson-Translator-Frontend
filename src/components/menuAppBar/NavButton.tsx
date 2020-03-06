import React, { useState, useEffect } from "react";
import "./NavButton.scss";
import { useRouter } from "next/router";

const NavButton = props => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { name, goTo, route, activeIcon, inActiveIcon } = props;

  useEffect(() => {
    router.pathname === route ? setIsActive(true) : setIsActive(false);
  }, [goTo]);

  return (
    <button
      className={isActive ? "NavButton-btn--active" : ""}
      type="button"
      onClick={() => goTo(route)}
    >
      <img src={isActive ? activeIcon : inActiveIcon} alt="" />
      {name}
    </button>
  );
};

export default NavButton;
