import React from 'react'
import Layout from "../components/layout";
import Title from '../components/Globals/Title';
import BackgroundSection from "../components/Globals/BackgroundSection";

{/* <section className="contact py-5">
           <h1>Contact Us</h1>
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/relevantdocs247@gmail.com" method="POST">
                      
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            className="form-control" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            />
                        </div>
                        
                         <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" 
                            className="form-control" 
                            name="_replyto" 
                            id="email" 
                            placeholder="email@email.com"
                            />
                        </div>
                      
                        <div className="form-group">
                            <label htmlFor="description">Description
                            </label>
                            <textarea name="description" 
                            id="description" 
                            className="form-control" 
                            rows="5" 
                            placeholder="your description goes here..."
                            />
                        </div>
                  
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                    </form>
                </div>
            </div>
    </section> */}

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
            <div className="card-body">
              <h4>Hours</h4>
              <table className="table">
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
                            <h4>Address</h4>
              <p>2501 C, Jordan Ln NW, Huntsville, AL 35816</p>
              <span></span>
              <h4>Phone</h4>
              <p>(256) 384-7956 </p>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4 py-5">
          <div className="card p-1">
            <div className="card-body">
            <tbody className="pb-5">
              <tr>
                    <td>Closed</td></tr><tr><td className="store-hours">Monday</td>
                    <td>10AM–8PM</td></tr><tr><td className="store-hours">Tuesday</td>
                    <td>10AM–8PM</td></tr><tr><td className="store-hours">Wednesday</td>
                    <td>10AM–8PM</td></tr><tr><td className="store-hours">Thursday</td>
                    <td>10AM–8PM</td></tr><tr><td className="store-hours">Friday</td>
                    <td>10AM–10PM</td></tr><tr><td className="store-hours">Saturday</td>
           </tr>
                    </tbody>
           
              <h6>2501 C, Jordan Ln NW, Huntsville, AL 35816</h6>
              <h6 id="store-labels">Phone</h6>
              <h6>(256) 384-7956</h6>
            </div>
          </div>
        </div> */}
        <div class="col-md-8 py-5">
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
                  <div class="form-group">
                    <input type="submit" value="Submit" class="btn btn-outline-danger btn-block"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </Layout>
   
    )
}


