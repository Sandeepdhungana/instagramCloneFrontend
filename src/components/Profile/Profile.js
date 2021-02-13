/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../../styles/Profile/Profile.css";
import ProfileGallery from "./ProfileGallery";
import ProfileTop from "./ProfileTop";
import axios from "axios";
import { useStateValue } from "../../Reducers/StateProvider";
import Loader from '../../components/Loader/Loader'

function Profile({ followers, following }) {
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [{ userinfo }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(null);

  const getMyPost = () => {
    setLoading(true);
    const det = JSON.parse(localStorage.getItem("user"));
    setUsername(det?.username);
    setName(det?.name);
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    };

    axios
      .get("http://localhost:5000/mypost", axiosConfig)
      .then((res) => {
        setLoading(false)
        dispatch({
          type: "MY_POST",
          myposts: res.data.myPost,
        });
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  useEffect(() => {
    getMyPost();
    const interval = setInterval(() => {
      getMyPost();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profile">
      {loading?<Loader />:<><ProfileTop
        name={name}
        username={username}
        followers={followers}
        following={following}
      />
      <ProfileGallery /></>}
    </div>
  );
}

export default Profile;
