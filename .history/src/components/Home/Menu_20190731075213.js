import React, { Component } from "react";
import Title from "../Globals/Title";
import Img from "gatsby-image";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  
      console.log(props.items)
    };
  }
  render() 
   
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row mb-5">
              <div className="col">
                <h1>these are our items</h1>
              </div>
            </div>
          </div>
        </section>
    
    //   return (
    //     <section className="menu py-5">
    //       <div className="container">
    //         <Title title="best of our menu" />
    //         <div className="row">
    //           <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
    //             <h1>there are no items to display</h1>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
      );
    
  

