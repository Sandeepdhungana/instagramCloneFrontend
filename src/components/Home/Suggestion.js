import { Avatar } from "@material-ui/core";
import React from "react";
import "../../styles/Home/Suggestions.css";

function Suggestion() {
  return (
    <div className="suggestion">
      <div className="suggestion__left">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-lQVDQ664n3hHOX9mei3bfeLJDG90xlCYNCG--kw=s32-c-mo" />
        <div className="suggestion__names">
          <h5>hriddhidhungana</h5>
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
