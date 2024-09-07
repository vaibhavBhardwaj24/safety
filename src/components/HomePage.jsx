import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-around items-center h-screen w-full bg-red-500 ">
      <div className="flex flex-col w-1/2 gap-3">
        <h1 className="text-7xl text-white font-semibold">
          Stay Safe, Stay Strong
          <br /> with <b className="">Amsafe</b>
        </h1>
        <p className="text-white text-2xl">
          One tap can alert loved ones and local authorities. Feel safe,
          confident, and connected no matter where life takes you
        </p>
        <button className="bg-white rounded-xl text-xl p-2 w-fit text-red-500">Get started</button>
      </div>
      <img src="src\components\mockup.png" alt="" className="h-3/4" />
    </div>
  );
};

export default HomePage;
