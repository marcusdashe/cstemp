import React from "react";
import YouTube from "react-youtube";

const Yutube = ({ videoId }) => {
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return <div>Yutube</div>;
};

export default Yutube;
