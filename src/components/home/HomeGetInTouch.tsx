"use client";
import React from "react";
import { Button } from "../ui";
import { useRouter } from "next/navigation";

const HomeGetInTouch = () => {
  const router = useRouter();
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
      <Button
        onClick={() => router.push("/contact-us")}
        className="bg-white text-blue-600"
      >
        Get In Touch
      </Button>
    </div>
  );
};

export default HomeGetInTouch;
