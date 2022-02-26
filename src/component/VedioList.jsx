import React from "react";
import vedio from "../vedio/movie.mp4";
const VedioList = () => {
  const list = [5, 5, 5, 5, 5, 5, 5, 5, 5];
  return (
    <div className="w-full">
        <h1 className="text-center w-full text-3xl  text-gray-900 pb-4 font-bold">Vedio Lists</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {list.map((ind) => (
          <div key={ind} className="w-full bg-white shadow-sm p-2 rounded-md">
            <video width="750" height="500" controls>
              <source src={vedio} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VedioList;
