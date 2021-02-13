/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../../styles/Profile/Profile.css";
import UProfileGallery from "./UProfileGallery";
import UProfileTop from "./UProfileTop";
import axios from "axios";
import { useStateValue } from "../../Reducers/StateProvider";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function UProfile() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(null);
  const [name, setName] = useState("");
  const [state, dispatch] = useStateValue();
  const { userId } = useParams();
  const [follow, setFollow] = useState({
    followers:null,
    following:null
  })

  const userProfile = () => {
    setLoading(true);
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
        
        setLoading(false);
        setName(res.data.user[0].name);
        setUsername(res.data.user[0].name);
        setFollow({
          followers:res.data.user[0].followers,
          following:res.data.user[0].following
        })
        dispatch({
          type: "USER_POST",
          userpost: res.data.posts,
        });
        
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  useEffect(() => {
    userProfile();
    
  },[]);

  return (
    <div className="profile">
      {loading?<Loader/>:<><UProfileTop name={name} username={username} followw= {follow} />
      <UProfileGallery /></>}
    </div>
  );
}

export default UProfile;
