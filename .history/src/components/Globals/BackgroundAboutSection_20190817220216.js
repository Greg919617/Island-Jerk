import React from "react";
import logo2 from "../../images/logo2.png";
// import BackgroundImage from "gatsby-background-image";


// const picStyle = {
  
//   display: 'block',
//   width: '53%'
// };
export default function BackgroundAboutSection({
  img,
  styleClass,
  title,
  tagline,
  address,
  children
}) {
  return (
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={logo2} alt="logo" alt="Avatar" styleClass="width:300px;height:300px;"/>
    </div>
    <div class="flip-card-back">
      <h1>Greg</h1> 
      <p>Architect & Engineer</p> 
      <p>I love building on top of ideas</p>
    </div>
  </div>
</div>
    
  );
}

//  BackgroundSection.defaultProps = {
//    title: "default title",
//   styleClass: "default-background",
//    tagline:"Jamaican Restaurant in Huntsville",
//    address: "Address: 2230 Sparkman Dr NW #100, Huntsville, AL 35810",
//  };





/* backgrroundaboutheader basis 

 <header id="about-section">
    <div className="container pt-5">
      <section>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="pb-5" >
                
      <img className="img-fluid"  src={require('./lemonlady.jpg')} />


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
  




*/


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
