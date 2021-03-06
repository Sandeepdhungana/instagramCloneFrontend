/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../../styles/Profile/ProfileTop.css";
import { Link, useParams } from "react-router-dom";
import { useStateValue } from "../../Reducers/StateProvider";
import axios from "axios";
import { axiosConfig } from "../axiosConfig";

function UProfileTop({ name, username, followw }) {
  const [{ userpost, following }] = useStateValue();

  const { userId } = useParams();

  const [followed, setFollowed] = useState(null);
  const [followernumber, setFollowernumber] = useState(null);
  const [followingnumber, setFollowingnumber] = useState(null);

  const isFollowed = following?.includes(userId);

  useEffect(() => {
    setFollowed(isFollowed);
    setFollowernumber(followw.followers?.length);
    setFollowingnumber(followw.following?.length);
  }, [isFollowed, followw.followers?.length, followw.following?.length]);

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
  return (
    <div className="profiletop">
      <div className="profiletop__circularImage">
        <img
          src="https://instagram.fblr1-4.fna.fbcdn.net/v/t51.2885-19/s320x320/64728514_2402538226505930_2150340179208962048_n.jpg?_nc_ht=instagram.fblr1-4.fna.fbcdn.net&_nc_ohc=C4PyOfvSVZUAX9DQCtj&tp=1&oh=c005e938fb0c60067effb4b7211be767&oe=60447021"
          alt=""
        />
      </div>
      <div className="profiletop__info">
        <div className="profiletop__names">
          <p>{username}</p>
          <div className="followButton">
            {followed ? (
              <button
                onClick={() => {
                  unfollow(userId);
                }}
              >
                Unollow
              </button>
            ) : (
              <button
                onClick={() => {
                  follow(userId);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
            <path
              clipRule="evenodd"
              d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="profiletop__numbers">
          <p>
            <span>{userpost?.length}</span> posts
          </p>
          <p>
            <span>{followernumber}</span> followers
          </p>
          <p>
            <span>{followingnumber}</span> following
          </p>
        </div>
        <div className="profiletop__bios">
          <p className="profiletop__name">{name}</p>
          <p className="profiletop__bio">
            I hope Karma slaps you in the face right before I do!
          </p>
        </div>
      </div>
    </div>
  );
}

export default UProfileTop;
