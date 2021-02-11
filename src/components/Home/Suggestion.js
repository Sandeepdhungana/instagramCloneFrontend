/* eslint-disable no-unused-vars */
import { Avatar } from "@material-ui/core";
import React from "react";
import "../../styles/Home/Suggestions.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../../Reducers/StateProvider";

function Suggestion({ _id, name }) {
  const [state, dispatch] = useStateValue();

  const follow = (followid) => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    };
    const userId = {
      followid,
    };
    axios
      .put(`http://localhost:5000/follow`, userId, axiosConfig)
      .then((res) => {
        // console.log(res.data.users.following);
        // console.log(res.data.users.followers);
        dispatch({
          type: "FOLLOW",
          followe: {
            followers: res.data.users.followers,
            following: res.data.users.following,
          },
        });
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
            follow(_id);
          }}
        >
          Follow
        </p>
      </div>
    </div>
  );
}

export default Suggestion;
