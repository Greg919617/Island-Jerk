import React from "react";
// import BackgroundImage from "gatsby-background-image";


// const picStyle = {
  
//   display: 'block',
//   width: '53%'
// };
export default function BackgroundSection({
  img,
  styleClass,
  title,
  tagline,
  address,
  children
}) {
  return (
    <header id="home-section">
    <div className="home-inner container">
      <section>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div >
                
      <img className="img-fluid" src={markslogo.jpg}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
  
 
    
  );
}

//  BackgroundSection.defaultProps = {
//    title: "default title",
//   styleClass: "default-background",
//    tagline:"Jamaican Restaurant in Huntsville",
//    address: "Address: 2230 Sparkman Dr NW #100, Huntsville, AL 35810",
//  };



{/* <div className="container">
<div className="row">
  <div className="col">
  <img fluid style={picStyle} src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1" alt="" class="center pb-1"/>
  </div>
    <div className="col">
      
    <img fluid style={picStyle} src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1" alt="" class="center pb-1"/>
    </div>
    <div className="col">
    <img fluid style={picStyle} src="https://lh3.googleusercontent.com/6MxLRDs26bKuvVAHGrJxWdR1uVrXzAgB37OtoA-9ahoUjwdO5hkhQZjxB3eBtldh9cdA7wiBCw=w960-h960-n-o-v1" alt="" class="center pb-1"/>
    </div>

  
</div>
</div> */}
