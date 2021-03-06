import React from "react";
import BackgroundImage from "gatsby-background-image";


const picstyle = {
  fontSize: '15px',
  textAlign: 'center',
  display: 'block',
  width: '53%'
};
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
      <img style={picstyle} src="/components/images/markslogo.jpg" alt="picture" className="center pb-1"/>
     
    </div>
 
    
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
  // tagline:"Jamaican Restaurant in Huntsville",
  // address: "Address: 2230 Sparkman Dr NW #100, Huntsville, AL 35810",
};