import Suggestion from "./Suggestion";
import Story from "./Story";
import Post from "./Post";
import SideBar from "./SideBar";
import "../../styles/Home/Home.css";
import { useStateValue } from "../../Reducers/StateProvider";
import axios from 'axios';
import { useEffect } from "react";

function Home({openProfile}) {
  const [{ posts, allusers }, dispatch] = useStateValue();

  useEffect(() => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    };
  
    axios
      .get("http://localhost:5000/allusers", axiosConfig)
      .then((res) => {
        // console.log(res?.data.alluser);
        dispatch({
            type:"ALL_USERS",
            allusers:res.data.alluser
        })
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  })
  return (
    <div className="home">
      {/* <Header /> */}

      <div className="home__body">
        <div className="home__body__left">
          <Story />
          {posts?.map((postsData) => {
            return (
              <Post
                key={postsData._id}
                _id={postsData._id}
                title={postsData.title}
                body={postsData.body}
                photos={postsData.photo}
                postby={postsData.postedBy}
                like={postsData.likes}
                comments={postsData.comments}
              />
            );
          })}
        </div>
        <div className="home__body__right">
          <SideBar />
          <div className="sidebarSuggestions">
            <h4>Suggestions For You</h4>
            <p>See All</p>
          </div>
          {allusers?.slice(0,5).map((users,index) => {
            return (
              <Suggestion key = {users._id} _id = {users._id} name={users.name} openProfile={openProfile} />
            )
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Home;
