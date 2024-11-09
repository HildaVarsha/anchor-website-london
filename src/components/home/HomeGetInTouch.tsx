import React from "react";
import { Button } from "../ui";

const HomeGetInTouch = () => {
  return (
    <div
      className="my-12 container mx-auto h-48 rounded-md flex flex-col items-center justify-center "
      style={{
        backgroundImage: "url('/home-get-in-touch.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <p className="text-md md:text-xl font-bold text-white">
        “Some of the History of Our Company is that
      </p>
      <p className="text-md md:text-xl font-bold text-white mb-4">
        we are Catching up through Video”
      </p>
      <Button className="bg-white text-blue-600">Get In Touch</Button>
    </div>
  );
};

export default HomeGetInTouch;
