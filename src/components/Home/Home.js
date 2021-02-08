import Suggestion from "./Suggestion";
import Story from "./Story";
import Post from "./Post";
import SideBar from "./SideBar";
import "../../styles/Home/Home.css";
import { useStateValue } from "../../Reducers/StateProvider";

function Home() {
  const [{ posts }, dispatch] = useStateValue();
  // console.log("inside home", posts);
  return (
    <div className="home">
      {/* <Header /> */}

      <div className="home__body">
        <div className="home__body__left">
          <Story />
          {
            posts?.map((postsData) => {
              return (
                <Post
                  key={postsData._id}
                  _id={postsData._id}
                  title={postsData.title}
                  body={postsData.body}
                  photos={postsData.photo}
                  postby={postsData.postedBy}
                  like={postsData.likes}
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
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
        </div>
      </div>
    </div>
  );
}

export default Home;
