import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import FileUpload from "./FileUpload";
import FileList from "./FileList";

const Home = () => {
  const [code, setCode] = useState(false);
  const [token, setToken] = useState("");
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const location = useLocation();
  const signin = () => {
    axios
      .get(`http://localhost:5000/getAuthURL`)
      .then((res) => (window.location = `${res.data}`));
  };

  useEffect(() => {
    console.log(location.search);
    /*if (location?.search) {
      setCode(location.search?.split("=")[1]?.split("&")[0]);
      axios.post(`http://localhost:5000/getToken`, { code }).then((res) => {
        console.log(res.data);
        setToken(res.data);
        setCheck(true);
      });
      localStorage.setItem("token", token);
      console.log(token);
    } else {
      setCode(false);
    }*/
  });
  return (
    <div style={{ backgroundColor: "#EBF5FB", height: 720 }}>
      <h1
        style={{
          color: "#00539CFF",
          fontWeight: "bold",
          fontFamily: "cursive",
          fontSize: 60,
          paddingTop: 100,
        }}
      >
        Welcome to the Site
      </h1>
      <div
        className="jumbotron"
        style={{
          width: 600,
          height: 400,
          marginLeft: 350,
          textAlign: "center",
          paddingLeft: 200,
        }}
      >
        {check === false ? (
          <div>
            <button
              style={{
                marginTop: 150,
                backgroundColor: "#EEA47FFF",
                width: 300,
                height: 60,
                fontSize: 25,
                fontWeight: "bold",
                fontFamily: "cursive",
                color: "white",
              }}
              className="btn"
              onClick={signin}
            >
              Signin
            </button>
          </div>
        ) : (
          {
            /*<FileList token={token} />*/
          }
        )}
      </div>
    </div>
  );
};

export default Home;
