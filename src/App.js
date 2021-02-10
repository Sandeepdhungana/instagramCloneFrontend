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
import { useEffect } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useStateValue } from "./Reducers/StateProvider";

const Routing = () => {
  const [state, dispatch] = useStateValue();
  // const [post, setPost] = useState();
  
  const notify = () => toast.error("You must login to continue or create account", {autoClose:2000});
  const history = useHistory();
  useEffect(() => {
    const user = localStorage.getItem("user")
    if(!user) {
      notify();
      history.push('/login')
    } else {
      
    }
  },[])

 
  useEffect(() => {
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
          type: 'GET_POSTS',
          posts: res.data.posts
        })
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  })
  
  

  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Header />
        <Profile />
      </Route>
      <Route exact path="/profile/:userId">
        <Header />
        <UProfile />
      </Route>
      <Route exact path="/createpost">
        <Header />
        <CreatePost />
      </Route>
    </Switch>
  )
}
function App() {
 
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
