import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const FileList = (props) => {
  const [token, setToken] = useState({
    access_token: `${localStorage.getItem("accessToken")}`,
  });
  const [files, setFiles] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    //setToken(props.token);
    if (count === 0) {
      axios.post(`http://localhost:5000/readDrive`, { token }).then((res) => {
        setFiles(res.data);
        console.log(res.data);
        console.log(files);
      });
      setCount(count + 1);
    }
  });

  const deleteFile = (id) => {
    console.log(id);
    axios
      .post(`http://localhost:5000/deleteFile/${id}`, { token })
      .then((res) => {
        console.log(res.data);
        window.location = "/list";
      });
  };

  const downloadFile = (id, image) => {
    console.log(image);
    axios
      .post(`http://localhost:5000/download/${id}`, { token })
      .then((response) => {
        saveAs(
          `https://drive.google.com/uc?export=view&id=${id}`,
          image.name.split(".")[0]
        );
        var file = new Blob(
          [`https://drive.google.com/uc?export=view&id=${id}`],
          { type: "image/png" }
        );
        saveAs(file, image.name.split(".")[0]);
      });
  };
  return (
    <div>
      <div style={{ backgroundColor: "" }}>
        <h1
          style={{
            color: "#00539CFF",
            fontWeight: "bold",
            fontFamily: "cursive",
          }}
        >
          Image List
        </h1>
      </div>

      {files.length > 0 &&
        files.map((file) => (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto",
              backgroundColor: "#EBF5FB",
              padding: 10,
            }}
            key={file.id}
          >
            <div
              style={{
                padding: 20,
                fontSize: 30,
                textAlign: "center",
              }}
            >
              <div className="card">
                <div
                  className="row"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                >
                  <div className="col-4" style={{ marginLeft: 100 }}>
                    <div className="card-body">
                      <h4
                        className="card-title"
                        style={{
                          color: "#00539CFF",
                          fontWeight: "bold",
                          fontFamily: "cursive",
                        }}
                      >
                        Image Name: {file.name?.split(".")[0]}
                      </h4>
                    </div>
                    <img
                      className="card-img-top mb-3"
                      src={`https://drive.google.com/uc?export=view&id=${file.id}`}
                      alt="Card image cap"
                      style={{ width: 300, height: 200 }}
                    />
                  </div>
                  <div className="col-6">
                    <div>
                      <button
                        className="btn"
                        style={{
                          width: 300,
                          backgroundColor: "#FF4F58FF",
                          fontWeight: "bold",
                          marginTop: 100,
                          color: "white",
                        }}
                        onClick={() => deleteFile(file.id)}
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn"
                        style={{
                          width: 300,
                          backgroundColor: "#FBDE44FF",
                          fontWeight: "bold",
                          color: "white",
                        }}
                        onClick={() => downloadFile(file.id, file)}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FileList;
