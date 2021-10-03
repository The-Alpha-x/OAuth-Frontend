import React, { useState } from "react";
import FileUpload from "./FileUpload";
import FileList from "./FileList";
const Menu = () => {
  const [changeLayout, setChangeLayout] = useState("");
  const changeToList = () => {
    console.log("hello");
    setChangeLayout("List");
  };
  const changeToUpload = () => {
    setChangeLayout("Upload");
  };
  return (
    <div style={{ backgroundColor: "#EBF5FB", height: 720 }}>
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
        {changeLayout === "" ? (
          <div>
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
                onClick={changeToList}
                className="btn"
              >
                View Image List
              </button>
            </div>
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
                onClick={changeToUpload}
                className="btn"
              >
                Upload Image
              </button>
            </div>
          </div>
        ) : changeLayout === "List" ? (
          <FileList />
        ) : (
          <FileUpload />
        )}
      </div>
    </div>
  );
};

export default Menu;
