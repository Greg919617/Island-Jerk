import React from "react";
// import BackgroundImage from "gatsby-background-image";


const picStyle = {
  
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
       <div className="col-lg-3">
       <img fluid style={picStyle} src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1" alt="image" class="center pb-1"/>
       </div>
         <div className="col-lg-5">
           
         <img fluid style={picStyle} src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1" alt="image" class="center pb-1"/>
         </div>
         <div className="col-lg-3">
         <img fluid style={picStyle} src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1" alt="image" class="center pb-1"/>
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