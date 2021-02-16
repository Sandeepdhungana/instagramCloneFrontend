import React, { useState } from "react";
import "../../styles/Login/Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isEmail from "validator/lib/isEmail";
import Input from "../Signup/Input";
import Button from "../Signup/Button";
toast.configure();

function Login() {
  const history = useHistory();
  const notify = (errorMessage, message) => {
    message(errorMessage, { autoClose: 2000 });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // making a post request to the server.
  const postData = () => {
    if (!isEmail(email)) {
      return notify("Enter a valid email to login", toast.error);
    }
    axios
      .post("https://instagram-by-sandeep.herokuapp.com/login", {
        email,
        password,
      })
      .then((response) => {
        
        localStorage.setItem("jwt",response.data.token);
        localStorage.setItem("user",JSON.stringify(response.data.user));
        history.push("/");
      })
      .catch((err) => {
        notify("Please enter valid username or password", toast.error);
      });
    if (!email ||  !password) {
      
    } else {
      setEmail("");
      setPassword("");
    }
  };
  const login = (
    <>
      <Input
        placeHolderName="Email"
        inputType="email"
        setAccount={setEmail}
        values={email}
      />
      <Input
        placeHolderName="Password"
        inputType="password"
        setAccount={setPassword}
        values={password}
      />
      <Button buttonName="Login" action={postData} />
      <p>OR</p>
      <Button color="#0095F6" buttonName="Log in with Facebook" />
      <Link to="#">Forgot password?</Link>
      <Link to="/signup">Create a new account</Link>
    </>
  );
  
  return (
    <div className="login">
      <div className="login__top">
        <div className="login__left">
          <img
            src="https://1.bp.blogspot.com/-AhH4MHo2Sr0/YBo8_Hc8oiI/AAAAAAAAMvA/KtDeQ4BUc5sWcEI55AAx0VFe0JZcLyglwCLcBGAsYHQ/w342-h529/phonephoto.png"
            alt=""
          />
        </div>
        <div className="login__right">
          <img
            src="https://1.bp.blogspot.com/-HYDtBt2bi4c/YBpDb9xqEeI/AAAAAAAAMvM/879Tam4uzX02L_dQ8FhTGrCEgo6_b2j_wCLcBGAsYHQ/s0/instagramimage.png"
            alt=""
          />
          {login}
        </div>
      </div>
    </div>
  );
}

export default Login;

// https://1.bp.blogspot.com/-AhH4MHo2Sr0/YBo8_Hc8oiI/AAAAAAAAMvA/KtDeQ4BUc5sWcEI55AAx0VFe0JZcLyglwCLcBGAsYHQ/w342-h529/phonephoto.png
