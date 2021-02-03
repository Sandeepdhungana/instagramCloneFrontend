import { Avatar } from "@material-ui/core";
import React from "react";
import "../../styles/Home/Sidebar.css";


function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar__left">
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-lQVDQ664n3hHOX9mei3bfeLJDG90xlCYNCG--kw=s32-c-mo" />
            <div className="sidebar__names">
                <h5>hriddhidhungana</h5>
               <p>Sandeep</p>
            </div>
        </div>
        <div className="sidebar__right">
        <p>Switch</p>
        </div>
    </div>
  );
}

export default SideBar;
