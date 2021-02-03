import "./App.css";
import Home from "./components/Home/Home";
import {BrowserRouter, Link, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default App;
