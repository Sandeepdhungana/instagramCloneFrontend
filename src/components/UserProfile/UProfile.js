/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../../styles/Profile/Profile.css";
import UProfileGallery from "./UProfileGallery";
import UProfileTop from "./UProfileTop";
import axios from "axios";
import { useStateValue } from "../../Reducers/StateProvider";
import { useParams } from "react-router-dom";

function UProfile() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [{ userinfo }, dispatch] = useStateValue();
  const { userId } = useParams();

  useEffect(() => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    };

    axios
      .get(`http://localhost:5000/profile/${userId}`, axiosConfig)
      .then((res) => {
        setName(res.data.user[0].name);
        setUsername(res.data.user[0].name);
        dispatch({
          type: "USER_INFO",
          userinfo: res.data.user,
        });
        dispatch({
          type: "USER_POST",
          userpost: res.data.posts,
        });
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
    
  },[]);
  return (
    <div className="profile">
      <UProfileTop name={name} username={username} />
      <UProfileGallery />
    </div>
  );
}

export default UProfile;
