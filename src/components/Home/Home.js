import Suggestion from "./Suggestion";
import Header from "./Header";
import Story from "./Story";
import Post from "./Post";
import SideBar from "./SideBar";
import "../../styles/Home/Home.css";


function Home() {
  return (
    <div className="home">
      {/* <Header /> */}

      <div className="home__body">
        <div className="home__body__left">
          <Story />
          <Post />
          <Post />
          <Post />
          <Post />
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
