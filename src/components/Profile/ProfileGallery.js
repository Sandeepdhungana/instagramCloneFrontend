/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/Profile/ProfileGallery.css";
import Image from "./Image";
import { useStateValue } from "../../Reducers/StateProvider";
import Slide from "react-reveal/Slide";

function ProfileGallery() {
  const [{ myPost }, dispatch] = useStateValue();
  return (
    <div className="profilegallery">
      {myPost?.map((datas) => {
        return <Image key={datas.photo} image={datas.photo} />;
      })}
    </div>
  );
}

export default ProfileGallery;
