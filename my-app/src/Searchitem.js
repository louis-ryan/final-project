import React from "react";
import "./App.css";

const Searchitem = ({ video, handleVideoSelect }) => {
  return (
    <div>
      <div
        onClick={() => handleVideoSelect(video)}
        className=" video-item item"
        className="searchrow"
        style={{
          height: "78px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "80px",
            overflow: "hidden",
          }}
        >
          <img
            style={{
              height: "80px",
              marginLeft: "-24px",
            }}
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
          />
        </div>
        <div
          style={{
            width: "300px",
            overflow: "hidden",
            marginRight: "4px",
          }}
        >
          <p
            style={{
              filter: "invert(100%)",
            }}
          >
            {video.snippet.title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Searchitem;
