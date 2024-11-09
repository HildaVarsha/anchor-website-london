import React from "react";
import { Button } from "../ui";

const HomeBanner = () => {
  return (
    <div className="relative flex flex-col justify-center h-[600px] md:h-[700px] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/29167798/12595751_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay content */}
      <div className="relative container mx-auto text-white px-4 md:px-0 z-10">
        <p className="text-3xl md:text-5xl font-bold">We Drive Digital</p>
        <p className="text-3xl md:text-5xl font-bold py-4">
          Transformation, Globally.
        </p>
        <Button className="mt-4">View More</Button>
      </div>

      {/* Optional overlay for darkening the video */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HomeBanner;
