import React, { useState, useEffect } from "react";
import axios from "axios";
const querystring = require("querystring");

const FileUpload = (props) => {
  const [token, setToken] = useState({
    access_token:
      "ya29.a0ARrdaM9pBORZI02R-sCDzpTCfEw6aki6TACU9fzaY8XBjCJhu6EoA11c3N6fHeKSre3OKxeLqNO7sSTX2e4zTrB0QiZN4evKaC4hj-4IOW_vU4itY_ZqKe9bXQDP3WiZAqFY-nle_LpHc_sSvxp50ztvQ3ld",
    refresh_token:
      "1//0gpoY01lG2qa0CgYIARAAGBASNwF-L9Ir6BEZZfvOwE7r48quryr8Klw7BpgEK2oIe_f6FjUlQbrNEGAvT_iyH2MzY1zoK0n4AqU",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.file",
    token_type: "Bearer",
    id_token:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOTI5YzYzZmYxMDgyYmJiOGM5OWY5OTRmYTNmZjRhZGFkYTJkMTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1NjIwMzkyMDAyMjgtZ2MwbGNpcGo5aTVhNDVram9kanI2NmJobHBtY2RvYzEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NjIwMzkyMDAyMjgtZ2MwbGNpcGo5aTVhNDVram9kanI2NmJobHBtY2RvYzEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTIyMDYyMzMwODQyNzU3NjA2MjQiLCJhdF9oYXNoIjoibjlqMTRZTnRsZXl0b0pUTllvS2MtQSIsIm5hbWUiOiJSYXZpbmR1IERpbGhhcmEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKd3ZTdU03c0FkLXBJOE5CN0VLQVlJYnZwbF9Ca0lXdHNWbFdrdXE9czk2LWMiLCJnaXZlbl9uYW1lIjoiUmF2aW5kdSIsImZhbWlseV9uYW1lIjoiRGlsaGFyYSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjMzMTEyNjY4LCJleHAiOjE2MzMxMTYyNjh9.SO0SbSly4c3Rpjlq77ORiaHlafcLQRnTPls3icNGgQ_cxPs5k4vv786iShfpJBSskJ2KF4G-C-UaCH3eLjz23zsyp6Fcci3CrVcdJdezy6o5ipZF6wZublRSDSdS6zb7Ex407bAfi_iWkL9Bk7RWHbkWijxkfkFcu8PTeDiKcYKwZNzmM6AZcw-JK7MtgqMUX1IeFb4eRxT6gR429C9BW1V2XM3SXwlYtrZbbD2d4A1KP8K27h0KUD-MDHmi3WVyVZyJGn7PBRB8NhncdXseJdli6z0I_u2WzAOESCAGpppswIbJ9EvU0d2wsqNC-2xjGCiwUQnl0aGfc8ZaIlqLZw",
    expiry_date: 1633116267380,
  });
  /*(useEffect(() => {
    setToken(props.token);
  });*/
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");

  const uploadImageCloudaniry = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "amanda");
    setLoading(true);
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/dfbysjmfe/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const fileName = await res.json();
    console.log(fileName);
    setFile(fileName);

    setImage(fileName.secure_url);
    setLoading(false);
  };
  const upload = () => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    /*const fd = new FormData();
    fd.append("file", image);
    fd.append("token", token);*/
    const fileData = {
      file: file,
      token: token,
    };

    const response = axios
      .post(
        `https://www.googleapis.com/upload/drive/v3/files?uploadType=media`,
        file
      )
      .then((res) => {
        console.log(res.data);
      });

    console.log(response);
  };
  return (
    <div style={{ backgroundColor: "#EBF5FB", height: 720 }}>
      <div>
        <h1
          style={{
            color: "#00539CFF",
            fontWeight: "bold",
            fontFamily: "cursive",
            paddingTop: 100,
          }}
        >
          Upload Image
        </h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImageCloudaniry}
          style={{ borderRadius: 5, backgroundColor: "gray" }}
          className="btn"
        />
      </div>
      <div>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} style={{ width: "300px", marginTop: 5 }} />
        )}
      </div>
      <div>
        <button
          className="btn"
          style={{
            width: 300,
            backgroundColor: "#FF4F58FF",
            fontWeight: "bold",
            marginTop: 20,
            color: "white",
          }}
          onClick={upload}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
