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
          <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/YOUR_EMAIL_HERE" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required=""/>
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
  </fieldset>
  <input type="submit" value="Submit"/>
</form>
            
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