import React from 'react'
import Layout from "../components/layout";
// import Title from '..components/Globals/Title';

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
<div class="container">
      <div class="row">
        <div class="col-md-4 py-5">
          <div class="card p-1">
            <div class="card-body">
              <h6>Sunda y- Closed</h6>
              <h6>Monday- Closed</h6>
              <h6>Sunda y- Closed</h6>
              <h6>Sunda y- Closed</h6>
              <h6>Sunda y- Closed</h6>
              <h6>Sunda y- Closed</h6>
           
              <p>2501 C, Jordan Ln NW, Huntsville, AL 35816</p>
              <h4>Email</h4>
   
              <h4>Phone</h4>
              <p>(256) 384-7956</p>
            </div>
          </div>
        </div>
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


