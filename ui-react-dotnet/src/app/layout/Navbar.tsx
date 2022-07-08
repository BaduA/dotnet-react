import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Image } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer(function Navbar() {
  const {
    userStore: { user, logout },
  } = useStore();
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <NavLink className="brand" to="/">
        PNGHUB Demo
      </NavLink>
      <NavLink to="/activities">Activities</NavLink>
      <NavLink to="/errors">Errors</NavLink>
      <NavLink to="/createactivity">Create Activity</NavLink>
      <div className="userProfileLogo">
        <Image
          src={user?.image || "/assets/user.png"}
          avatar
          spaced="right"
        ></Image>
        <Dropdown pointing="top left" text={user?.displayName}>
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to={`/profile/${user?.username}`}
              text="My Profile"
              icon="user"
            ></Dropdown.Item>
            <Dropdown.Item
              onClick={() => logout(navigate)}
              text="Logout"
              icon="power"
            ></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
});
