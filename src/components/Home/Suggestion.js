/* eslint-disable no-unused-vars */
import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../../styles/Home/Suggestions.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../../Reducers/StateProvider";
import { axiosConfig } from "../axiosConfig";

function Suggestion({ _id, name }) {
  const [{ following }, dispatch] = useStateValue();
  const [followed, setFollowed] = useState(null);

  const isFollowed = following?.includes(_id);
  useEffect(() => {
    setFollowed(isFollowed);
  }, [isFollowed]);

  const unfollow = (followid) => {
    setFollowed(false);

    const userId = {
      followid,
    };
    axios
      .put(`/unfollow`, userId, axiosConfig)
      .then((res) => {
        // console.log(res.data.users.following);
        // console.log(res.data.users.followers);
        // console.log("Followed.");
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  const follow = (followid) => {
    setFollowed(false);

    const userId = {
      followid,
    };
    axios
      .put(`/follow`, userId, axiosConfig)
      .then((res) => {
        // console.log(res.data.users.following);
        // console.log(res.data.users.followers);
        // console.log("Followed.");
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  var route = "/profile/" + _id;
  return (
    <div className="suggestion">
      <div className="suggestion__left">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-lQVDQ664n3hHOX9mei3bfeLJDG90xlCYNCG--kw=s32-c-mo" />
        <div className="suggestion__names">
          <Link to={route}>
            <h5>{name}</h5>
          </Link>
          <p>Suggested for you</p>
        </div>
      </div>
      <div className="suggestion__right">
        <p
          onClick={() => {
            followed ? unfollow(_id) : follow(_id);
          }}
        >
          {followed ? "Unfollow" : "Follow"}
        </p>
      </div>
    </div>
  );
}

export default Suggestion;
