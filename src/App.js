/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/Home/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import UProfile from "./components/UserProfile/UProfile";
import CreatePost from "./components/CreatePost/CreatePost";
import Signup from "./components/Signup/Signup";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useStateValue } from "./Reducers/StateProvider";
import Slide from "react-reveal/Slide";

const Routing = () => {
  const [{ posts }, dispatch] = useStateValue();

  // const [post, setPost] = useState();

  const notify = () =>
    toast.error("You must login to continue or create account", {
      autoClose: 2000,
    });
  const history = useHistory();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      notify();
      history.push("/login");
    } else {
    }
  }, []);

  const getPosts = () => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    };

    axios
      .get("http://localhost:5000/allpost", axiosConfig)
      .then((res) => {
        // setPost(res.data.posts)
        dispatch({
          type: "GET_POSTS",
          posts: res.data.posts,
        });
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  const getMyInfo = () => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    };

    axios
      .get("http://localhost:5000/myinfo", axiosConfig)
      .then((res) => {
        dispatch({
          type: "FOLLOWERS",
          followers: res.data.user[0]?.followers,
        });
        dispatch({
          type: "FOLLOWING",
          following: res.data.user[0]?.following,
        });
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  useEffect(() => {
    getPosts();
    const interval = setInterval(() => {
      getPosts();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getMyInfo();
    const interval = setInterval(() => {
      getMyInfo();
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {navigator.onLine && (
        <Switch>
          <Route exact path="/">
            <Slide left>
              <Header />
              <Home />
            </Slide>
          </Route>
          <Route exact path="/login">
            <Slide left>
              <Login />
            </Slide>
          </Route>
          <Route exact path="/signup">
            <Slide left>
              <Signup />
            </Slide>
          </Route>
          <Route exact path="/profile">
            <Slide left>
              <Header />
              <Profile />
            </Slide>
          </Route>
          <Route exact path="/profile/:userId">
            <Slide left>
              <Header />
              <UProfile />
            </Slide>
          </Route>
          <Route exact path="/createpost">
            <Slide left>
              <Header />
              <CreatePost />
            </Slide>
          </Route>
        </Switch>
      )}
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
