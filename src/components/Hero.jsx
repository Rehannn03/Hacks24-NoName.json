import React from "react";
import { blob1, blob2, heroImage, logo } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full h-[900px] relative">
        <div className="absolute w-full h-[712px] top-[188px] left-0">
          <img className="absolute w-[275px] h-[495px] top-[-20px] left-0" alt="Vector" src={blob1} />
          <img
            className="absolute w-[273px] h-[506px] top-[100px] left-[1256px]"
            alt="Vector"
            src={blob2}
          />
          <img
            className="absolute w-[507px] h-[471px] top-[10px] left-[811px]"
            alt="Hero image"
            src={heroImage}
          />
          <button className="absolute sm:w-[259px] sm:h-[91px] sm:top-[440px] top-[280px] sm:left-[230px] left-[180px] all-[unset] box-border cursor-pointer">
            <div className="relative w-[257px] h-[91px] bg-[#57e086] rounded-[38px_38px_38px_83px]">
              <div className="absolute w-[229px] h-[37px] top-[27px] left-[14px] [font-family:'Roboto',Helvetica] font-medium text-white text-[32px] text-center tracking-[3.52px] leading-[normal] whitespace-nowrap">
                <Link to="Ai">Get Started</Link>
              </div>
            </div>
          </button>
          <p className="absolute sm:w-[634px] sm:h-[233px] sm:top-[44px] left-[121px] top-[60px] [font-family:'Outfit',Helvetica] font-extrabold text-transparent sm:text-[69px] text-[34px] tracking-[0] leading-[normal]">
            <span className="text-[#7b8cea] underline">eX-Well.</span>
            <span className="text-[#ca0000]">&nbsp;</span>
            <span className="text-[#97a8b2]">One stop for your medical records</span>
            <span className="text-[#ca0000]">&nbsp;</span>
            <span className="text-[#7b8cea] underline">friendly Ai</span>
          </p>
          <button className="sm:absolute sm:w-[339px] sm:h-[90px] sm:top-[440px] sm:left-[478px] sm:box-border invisible sm:visible">
            <div className="relative w-[337px] h-[90px]">
              <div className="w-[249px] h-[90px] left-[44px] rounded-[38px_38px_38px_83px] border-[3px] border-solid border-[#58e186] absolute top-0" />
              <div className="absolute w-[337px] h-[36px] top-[27px] left-0 [font-family:'Roboto',Helvetica] font-medium text-[#97a8b2] text-[32px] text-center tracking-[5.44px] leading-[normal] whitespace-nowrap">
                <a href="#work">Learn More</a>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero