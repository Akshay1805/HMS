import React, { useState } from "react";
import axios from "axios";
import "./_tem.css";


const Test = () => {

  const [file, setFile] = useState("");
  const [fileData, setFileData] = useState<string | null>(''); // Updated state type
  const details={
    
  }
  const handleFileRequest = () => {
    axios
      .post("/get_file",details)
      .then((response) => {
        const blob = new Blob([response.data], { type: response.headers["content-type"] });
        const url = window.URL.createObjectURL(blob);
        setFileData(url);
      })
      .catch((error) => {
        console.error("Error requesting file:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter file name"
        value={file}
        onChange={(e) => setFile(e.target.value)}
      />
      <button onClick={handleFileRequest}>Request File</button>
      {fileData && (
        <a href={fileData} download="downloaded_file">
          Download File
        </a>
      )}
    </div>
  );
  
}

export default Test;
