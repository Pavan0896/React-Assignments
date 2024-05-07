import React, { useEffect, useState } from "react";

const Post = ({ id, title, body, verifyPost, onToggleVerify }) => {
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    setBgColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => onToggleVerify(id)}>
        {verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
};

export default React.memo(Post);
