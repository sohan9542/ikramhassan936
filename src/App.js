import React from "react";
import Timeline from "./component/Timeline";
import VedioList from "./component/VedioList";

const App = () => {
  return (
    <div className=" min-h-screen">
        {/* <h1 className="text-center w-full text-3xl  text-gray-900 font-bold py-4">Timeline</h1>
      <Timeline /> */}
      <VedioList />
    </div>
  );
};

export default App;
