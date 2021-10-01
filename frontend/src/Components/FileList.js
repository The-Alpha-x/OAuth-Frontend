import React, { useState, useEffect } from "react";
import axios from "axios";

const FileList = (props) => {
  const [token, setToken] = useState({
    access_token:
      "ya29.a0ARrdaM86Z7A5u67W8lMIU28uOsY0G8QdIfYpYxBl544JPbqE5VrUeLAEBtT0T3lEaKonlvPQkNyQIhuUj-Lh7nsH7l1aLyD9gv2oqdF0tLqjQJ5f0q0nrPRoIPq3-7sqm_Hup8pYgFDMPi0nli0utBircjJa",
    refresh_token:
      "1//0ghPqpjBS0rCACgYIARAAGBASNwF-L9IrWVj1ghTqrG3JXGMQvkcEn8e1iPSsZ1Af5iX14ZG_Q5a7P7Ld5Cdxoi9O9vNTmoj2wAc",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.file",
    token_type: "Bearer",
    id_token:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOTI5YzYzZmYxMDgyYmJiOGM5OWY5OTRmYTNmZjRhZGFkYTJkMTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyOTEzOTgwNjkyNzAtaWRrZGQxOTRxdjNlMHJnODN2ZGxvdnBsdDA2cnNpNWwuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyOTEzOTgwNjkyNzAtaWRrZGQxOTRxdjNlMHJnODN2ZGxvdnBsdDA2cnNpNWwuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTIyMDYyMzMwODQyNzU3NjA2MjQiLCJhdF9oYXNoIjoiQzNVWjd0Q3QtZDdObmxEQk1SellHQSIsIm5hbWUiOiJSYXZpbmR1IERpbGhhcmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKd3ZTdU03c0FkLXBJOE5CN0VLQVlJYnZwbF9Ca0lXdHNWbFdrdXE9czk2LWMiLCJnaXZlbl9uYW1lIjoiUmF2aW5kdSIsImZhbWlseV9uYW1lIjoiRGlsaGFyYSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjMzMTEzMjkzLCJleHAiOjE2MzMxMTY4OTN9.duNcr7IDVQOSoiPYw5Nt7qRWFDxJSp-D9iZ-I5_DhfuaF_D4j6231osoev2Ll2sRAnvKQRPOM_ODc3ScSmob5yZSwzlUHn5jFT-NaO91wrnSD0ZalcCzcFFZQwiZhTXZx09gaBPI0IhOUJJlzLjl5PIO9Ewf8c1-hXf7k3cROBJN8QYcXIRprKdF7cWCynmZekzAsMssaAk8QhXy2sn9dhA_ViOG6QxGLMntYIM_iqtCyZEhFOrxV3my5C2Ll5FcVB4QvMzEfX6W93FfqzKk10Kcvk3mYq3-N1jUf5nEF6DoUso6-nYVoZwQ9KEQmwfYwzmztPfA1WD7iBV9FExjRg",
    expiry_date: 1633116892606,
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

  const downloadFile = (id) => {
    axios
      .post(`http://localhost:5000/download/${id}`, { token })
      .then((res) => {
        console.log(res.data);
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
              <div className="">
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
                        onClick={() => downloadFile(file.id)}
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
