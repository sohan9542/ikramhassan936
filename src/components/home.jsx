import React from "react";
import { Typer } from "react-typetool";
import Particles from "react-particles-js";
import {
  MoveDirection,
  OutMode,
  MoveType as PolygonMaskMoveType,
} from "react-particles-js";
import hero1 from "../photos/hero bg1.png";
import hero2 from "../photos/hero bg 2.png";
import hero3 from "../photos/hero bg 3.png";
import hero4 from "../photos/hero bg 4.png";
import hero5 from "../photos/hero 6.png";
import pic from "../photos/image.png";
const Home = () => {
  return (
    <div className="w-full relative min-h-screen pt-20">
      <div className="w-full ">
        <div className="container overflow-hidden">
          <div className=" flex items-center anmim">
            <img src={hero1} alt="" />
            <img src={hero2} alt="" />
            <img src={hero3} alt="" />
            <img src={hero4} alt="" />
            <img src={hero5} alt="" />
          </div>
        </div>
      </div>
      <div className=" flex items-center flex-col gap-4 w-full justify-start pt-52 absolute top-0 left-0">
        <p className="name text-8xl  text-font text-center">Ikram Hassan</p>
        <p className=" font-medium text-font text-lg pt-3">
          <Typer
            loop={true}
            text="Software Developer, Tech enthusiast, Book worm"
          />
        </p>
        <div className=" w-44 h-44 rounded-full overflow-hidden bg-sr">
          <img
            src={pic}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <p className=" font-medium text-font text-lg pt-6 w-96">
          For over a decade, I have studied and inscribed the sacred runes and
          performed the arcane rituals that breathe life into the realm of the
          internet.
        </p>
        <p className=" font-medium mt-2 text-font text-lg pt-3 w-96">
          The web can sometimes be indistinguishable from magic, but I have the
          knowledge and patience required to make just about anything.
        </p>
      </div>
    </div>
  );
};

export default Home;
