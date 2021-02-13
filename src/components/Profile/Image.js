import React from "react";

import "../../styles/Profile/Image.css";
import Slide from "react-reveal/Slide";

function Image({ image }) {
  return (
    <Slide left>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </Slide>
  );
}

export default Image;
