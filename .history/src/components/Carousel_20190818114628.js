// import React from 'react'

// export default function Carousel() {
//   return (
    
//     <section id="about-section"> 
//     <div className="primary-overlay">
//     <div className="container">
     
   
//       <div className="row text-center">
  
     
   
//     </div>
//     </div>
//     </div>
//   </section>
//   )
// }


import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
const Carousel = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
         
            bgImage={require('../images/mkstore.png')}
            bgImageAlt="the store"
            strength={200}
        >
            {/* Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax. */}
            <div className="carousel-parallax-height">

            </div>
            <div style={{ height: '200px' }} />
        </Parallax>
 
 
       
    </div>
);
export default Carousel;