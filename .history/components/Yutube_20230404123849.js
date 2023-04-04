import React from "react";
import YouTube from "react-youtube";

const Yutube = ({ videoId }) => {
  const opts = {
    height: "500",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div
      className="relative overflow-hidden h-0"
      style={{ paddingBottom: "40.25%" }}
    >
      <YouTube
        videoId={videoId}
        opts={opts}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default Yutube;
