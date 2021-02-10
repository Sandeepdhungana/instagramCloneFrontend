import { Avatar } from "@material-ui/core";
import React from "react";
import "../../styles/Home/Suggestions.css";
import {Link} from 'react-router-dom';

function Suggestion({_id, name}) {
  var route = "/profile/"+_id;
  return (
    <div className="suggestion">
      <div className="suggestion__left">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-lQVDQ664n3hHOX9mei3bfeLJDG90xlCYNCG--kw=s32-c-mo" />
        <div className="suggestion__names">
          <Link to={route}><h5>{name}</h5></Link>
          <p>Suggested for you</p>
        </div>
      </div>
      <div className="suggestion__right">
        <p>Follow</p>
      </div>
    </div>
  );
}

export default Suggestion;
