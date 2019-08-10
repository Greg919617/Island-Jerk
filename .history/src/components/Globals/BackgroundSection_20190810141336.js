import React from "react";
import BackgroundImage from "gatsby-background-image";
export default function BackgroundSection({
  img,
  styleClass,
  title,
  tagline,
  address,
  children
}) {
  return (
   
    <div className="home-inner container">
      <img src="../images/markslogo.jpg" alt="" className="center pb-1"/>
     
    </div>
 
    
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
  // tagline:"Jamaican Restaurant in Huntsville",
  // address: "Address: 2230 Sparkman Dr NW #100, Huntsville, AL 35810",
};