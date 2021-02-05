import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/CreatePost/CreatePost";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/profile">
        <Header />
        <Profile />
      </Route>
      <Route exact path="/createpost">
        <Header />
        <CreatePost />
      </Route>
    </BrowserRouter>
  );
}

export default App;
