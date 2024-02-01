import React from "react";

const Card = () => {
    // Existing information
    const profileName = "John Doe";
    const profileImage = "/src/assets/BilalV.png";
  
    // Additional information
    const age = 25;
    const bloodGroup = "A+";
    const height = "5'10\"";
    const weight = "160 lbs";
  
    return (
      <div className="bg-white rounded-2xl h-[400px] w-[300px] mt-[-350px] ml-[-450px]">
        <div>
          <img
            src={profileImage}
            alt="Profile"
            height={60}
            width={60}
            className="ml-[120px] mt-12"
          />
          <p className="text-center font-semibold text-lg">{profileName}</p>
        </div>
        <p className="text-start ml-5 mt-[70px] font-light">
          <span className="block text-lg">Age: {age}</span>
          <span className="block text-lg">Blood Group: {bloodGroup}</span>
          <span className="block text-lg">Height: {height}</span>
          <span className="block text-lg">Weight: {weight}</span>
        </p>
      </div>
    );
  };
  
  export default Card;
