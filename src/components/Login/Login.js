import React from "react";
import Input from "./Input";
import "../../styles/Login/Login.css";
import Button from "./Button";
import { Link } from "react-router-dom";
function Login({ name }) {
  const login = (
    <>
      <Input
        placeHolderName="Phone number, username, or email"
        inputType="text"
      />
      <Input placeHolderName="Password" inputType="password" />
      <Button buttonName="Login" />
      <p>OR</p>
      <Button color="#0095F6" buttonName="Log in with Facebook" />
      <Link to="#">Forgot password?</Link>
      <Link to="/signup">Create a new account</Link>
    </>
  );
  const signup = (
    <>
      <h3>Sign up to see photos and videos from your friends.</h3>
      <Button color="#0095F6" buttonName="Signup with Facebook" />
      <Input placeHolderName="Email" inputType="text" />
      <Input placeHolderName="Username" inputType="text" />
      <Input placeHolderName="FullName" inputType="text" />
      <Input placeHolderName="Password" inputType="password" />
      <Button buttonName="Sign Up" />
      <h5>
        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </h5>
      <Link to="/login">Already have account</Link>
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
          {name === "login" ? login : signup}
        </div>
      </div>
    </div>
  );
}

export default Login;

// https://1.bp.blogspot.com/-AhH4MHo2Sr0/YBo8_Hc8oiI/AAAAAAAAMvA/KtDeQ4BUc5sWcEI55AAx0VFe0JZcLyglwCLcBGAsYHQ/w342-h529/phonephoto.png
