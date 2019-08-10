import React from 'react'
import Layout from "../components/layout";
import Title from '../components/Globals/Title';
import BackgroundSection from "../components/Globals/BackgroundSection";


export default function Contact() {
    return (
    <Layout>
    
    <BackgroundSection
      
      title="About M&K"
      styleClass="about-background"
    />
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
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="First Name"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Last Name"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Phone Number"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group pb-5">
                    <input type="submit" value="Submit" class="btn btn-outline-danger btn-block"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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


