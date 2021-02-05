import React, { useState } from "react";
import "../../styles/CreatePost/CreatePost.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreatePost() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const notify = () => {
    toast.success("Successfully posted.");
  };
  console.log(url);
  const postDetails = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram-clone");
    data.append("cloud_name", "sandeepsush");

    await axios
      .post("https://api.cloudinary.com/v1_1/sandeepsush/image/upload", data)
      .then(function (response) {
        setUrl(response.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    var postData = {
      title,
      body,
      picUrl: url,
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
    };

    axios
      .post("http://localhost:5000/createpost", postData, axiosConfig)
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
        notify();
        history.push('/')
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  // axios.defaults.headers.common["authorization"] = localStorage.getItem("jwt")

  return (
    <div className="createpost">
      <div className="createpost__container">
        {/* buttonName, color,margintop,marginbottom */}
        <div className="createpost__title">
          <input
            value={title}
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="createpost__caption">
          <textarea
            onChange={(e) => setBody(e.target.value)}
            placeholder="Add your caption here"
            value={body}
          />
        </div>
        <div className="createpost__upload">
          <label className="fileContainer">
            Upload Image
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </label>
        </div>
        <div className="btn">
          <button
            type="submit"
            onClick={() => {
              postDetails();
            }}
          >
            Post
          </button>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
