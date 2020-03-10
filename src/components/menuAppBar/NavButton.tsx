import React from "react";
import "./NavButton.scss";
import { useRouter } from "next/router";

type navButton = {
  name: string;
  route: string;
  activeIcon: string;
  inActiveIcon: string;
};

const NavButton = (props: navButton) => {
  const router = useRouter();
  const { name, route, activeIcon, inActiveIcon } = props;
  const isActive = router.pathname === route;

  const goTo = (route: string) => {
    router.push(route);
  };

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
