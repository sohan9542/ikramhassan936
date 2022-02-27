import React from "react";
import pixel from "../photos/pixelman.png";
const About = () => {
  return (
    <div className="mt-32">
      <div className="container">
        <div className=" w-full flex items-center flex-col justify-center">
          <h1 className="text-font text-2xl font-medium pb-8 w-40  text-center border-b-4 border-sr">
            ABOUT
          </h1>
         
          <p className=" font-medium text-font text-lg pt-4 w-96">
            What can a “full-stack web developer” do, you ask?
          </p>
          <p className=" font-medium text-font text-lg pt-4 w-96">
            I can conjur a website from nothing into existence, fully formed. I
            do not use tricks, nor is this magic. I specialize in manipulating
            the very fabric of the web, its raw materials of HTML, CSS,
            JavaScript, and SVG. Linux servers serve me, domains are my domain,
            and certificates are certain.
          </p>
          <p className=" font-medium text-font text-lg pt-4 w-96">
            Open-source technologies empower this process. I am a custom
            WordPress theme and plugin development expert. I fully embraced the
            Gutenberg editor and can create custom blocks from scratch for any
            conceivable need. I have contributed in small ways to these and
            other open-source efforts and intend to give back every chance I
            get.
          </p>
          <p className=" font-medium text-font text-lg pt-4 w-96">
            My art & design background informs ideation to design through to
            implementation. In 2010 I graduated from the Cleveland Institute of
            Art with a focus on digital arts and a mantra to always consider my
            audience. I will always advocate for the user of my interfaces;
            accessibility is not optional.
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default About;
