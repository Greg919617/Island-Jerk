import React from "react";
// import BackgroundImage from "gatsby-background-image";


const picstyle = {
  margin:'auto',
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
   <div className="container">
     <div className="row">
       <div className="col col-4 col-lg-3">
         czxcz
       </div>
         <div className="col col-4 col-lg-5">
           czxcz
         <img src="../images/markslogo.jpg" alt="image" class="center pb-1"/>
         </div>
         <div className="col col-4 col-lg-5">
czxczx
         </div>

       
     </div>
   </div>

  
 
    
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
  // tagline:"Jamaican Restaurant in Huntsville",
  // address: "Address: 2230 Sparkman Dr NW #100, Huntsville, AL 35810",
};