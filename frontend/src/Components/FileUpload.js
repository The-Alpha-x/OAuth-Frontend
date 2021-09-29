import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const upload = () => {
    axios
      .get(`http://localhost:5000/getAuthURL`)
      .then((res) => (window.location = `${res.data}`));
  };
  return (
    <div>
      <button onClick={upload}>File Upload</button>
    </div>
  );
};

export default FileUpload;
