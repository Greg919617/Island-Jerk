import React from 'react'
import Layout from "../components/layout";
import Title from '../components/Globals/Title';
import BackgroundSection from "../components/Globals/BackgroundSection";


export default function Contact() {
    return (
    <Layout>
    
   
<div class="container">
<Title title="Contact Us" />
      <div className="row">
      <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h4 className="text-center" >Hours</h4>
              <table className="table text-center">
  <thead class="thead-light">
    <tr>
      
      
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sunday</th>
      <td>Closed</td>
    
    </tr>
    <tr>
      <th scope="row">Monday</th>
      <td>Closed</td>
 
    </tr>
    <tr>
      <th scope="row">Tuesday</th>
      <td>10AM–8PM</td>
    
    </tr>
    <tr>
      <th scope="row">Wednesday</th>
      <td>10AM–8PM</td>
    
    </tr>
    <tr>
      <th scope="row">Thursday</th>
      <td>10AM–8PM</td>
    
    </tr>
    <tr>
      <th scope="row">Friday</th>
      <td>10AM–10PM</td>
    </tr>
    <tr>
      <th scope="row">Saturday</th>
      <td>10AM–10PM</td>  
    </tr>
  </tbody>
</table>
                            <h4 className="text-center">Address</h4>
              <p className="text-center">2501 C, Jordan Ln NW, Huntsville, AL 35816</p>
              <span></span>
              <h4 className="text-center" >Phone</h4>
              <a  href="tel:+1-256-384-7956">+1 (256) 384-7956</a>
            </div>
          </div>
        </div>
       
        <div class="col-md-8 pb-5">
          <div class="card p-4">
            <div class="card-body">
              <h3 class="text-center">Please fill out this form to contact us</h3>
              <hr/>


           
              <div class="row">
              <form action="https://formspree.io/relevantdocs247@gmail.com" method="POST">
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            className="form-control" 
                            name="name" 
                            id="name" 
                            placeholder="First Name"
                            required
                            />
                        </div>
                         {/* email */}
                         <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" 
                            className="form-control" 
                            name="_replyto" 
                            id="email" 
                            placeholder="email@email.com"
                            required
                            />
                        </div>
                        {/* description */}
                        <div className="form-group">
                            <label htmlFor="description">Description
                            </label>
                            <textarea name="description" 
                            id="description" 
                            className="form-control" 
                            rows="5" 
                            placeholder="How can we assist you..."
                            required
                            />
                        </div>
                        {/* Submit */}
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                    </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>


     {/* This is the mk sign above footer */}
        <section id="about-section"> 
        <div className="p-4 primary-overlay">
        <div className="container">
         
       
          <div className="row text-center">
      
         
       
        </div>
        </div>
        </div>
      </section>


    </Layout>
   
    )
}