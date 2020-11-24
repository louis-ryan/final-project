import React from "react";
import Searchitem from "./Searchitem";

const Searchlist = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <Searchitem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
    // console.log("video id :" video.id);
  });

  return <div>{renderedVideos}</div>;
};
export default Searchlist;
