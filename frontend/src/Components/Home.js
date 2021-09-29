import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [code, setCode] = useState(false);
  const [token, setToken] = useState("");
  const [count, setCount] = useState(0);
  const location = useLocation();
  const signin = () => {
    axios
      .get(`http://localhost:5000/getAuthURL`)
      .then((res) => (window.location = `${res.data}`));
  };

  useEffect(() => {
    if (location?.search) {
      setCode(location.search?.split("=")[1]?.split("&")[0]);
      axios.post(`http://localhost:5000/getToken`, { code }).then((res) => {
        console.log(res.data);
        setToken(res.data);
      });
      console.log(token);
    } else {
      setCode(false);
    }
  });
  return (
    <div>
      <button onClick={signin}>Signin</button>
    </div>
  );
};

export default Home;
