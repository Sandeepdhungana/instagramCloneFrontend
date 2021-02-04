import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>
      <Route exact path="/login">
        <Login name="login" />
      </Route>
      <Route exact path="/signup">
        <Login name="signup" />
      </Route>
      <Route exact path="/profile">
        <Header />
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
