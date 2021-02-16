import React, { useState } from "react";
import Input from "./Input";
import "../../styles/Login/Login.css";
import Button from "./Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isEmail from "validator/lib/isEmail";
toast.configure();
function Signup({ name }) {
  const history = useHistory();
  const notify = (errorMessage, message) => {
    message(errorMessage, { autoClose: 2000 });
  };
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullname] = useState("");
  const [password, setPassword] = useState("");
 

  // making a post request to the server.
  const postData = () => {
    if (!isEmail(email)) {
      return notify("Enter a valid email to signup", toast.error);
    }
    axios
      .post("https://instagram-by-sandeep.herokuapp.com/signup", {
        name: fullName,
        email,
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        notify("Login to your account", toast.success);
        history.push("/login");
      })
      .catch((err) => {
        notify("Please add all the field", toast.error);
      });
    if (!name || !email || !username || !password) {
      console.log(name);
      console.log(!name);
    } else {
      setEmail("");
      setUsername("");
      setFullname("");
      setPassword("");
    }
  };
  const signup = (
    <>
      <h3>Sign up to see photos and videos from your friends.</h3>
      <Button color="#0095F6" buttonName="Signup with Facebook" />
      <Input
        placeHolderName="Email"
        inputType="email"
        setAccount={setEmail}
        values={email}
      />
      <Input
        placeHolderName="Username"
        inputType="text"
        setAccount={setUsername}
        values={username}
      />
      <Input
        placeHolderName="FullName"
        inputType="text"
        setAccount={setFullname}
        values={fullName}
      />
      <Input
        placeHolderName="Password"
        inputType="password"
        setAccount={setPassword}
        values={password}
      />
      <Button buttonName="Sign Up" action={postData} />
      <h5>
        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </h5>
      <Link to="/login">Already have account? Sign In</Link>
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
          {signup}
        </div>
      </div>
    </div>
  );
}

export default Signup;

// https://1.bp.blogspot.com/-AhH4MHo2Sr0/YBo8_Hc8oiI/AAAAAAAAMvA/KtDeQ4BUc5sWcEI55AAx0VFe0JZcLyglwCLcBGAsYHQ/w342-h529/phonephoto.png
