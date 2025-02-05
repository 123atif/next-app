// BackgroundVideo.jsx
import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="/myvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
