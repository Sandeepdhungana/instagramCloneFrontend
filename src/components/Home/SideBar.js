import { Avatar } from "@material-ui/core";
import React from "react";
import "../../styles/Home/Sidebar.css";


function SideBar() {
  // const [{ posts }, dispatch] = useStateValue();
  const me = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="sidebar">
        <div className="sidebar__left">
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-lQVDQ664n3hHOX9mei3bfeLJDG90xlCYNCG--kw=s32-c-mo" />
            <div className="sidebar__names">
                <h5>{me.name}</h5>
               <p>{me.username}</p>
            </div>
        </div>
        <div className="sidebar__right">
        <p>Switch</p>
        </div>
    </div>
  );
}

export default SideBar;
