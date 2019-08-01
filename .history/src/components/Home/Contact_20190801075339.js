import React from 'react'
import Title from '../Globals/Title';



export default function Contact() {
    return (<section className="contact py-5">
            <Title title="Contact us"/>
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form>
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            className="form-control" 
                            name="name" 
                            id="name" 
                            placeholder="john smith"
                            />
                        </div>
                         {/* email */}
                         <div className="form-group">
                            <label htmlFor="email">EMail</label>
                            <input type="text" 
                            className="form-control" 
                            name="email" 
                            id="email" 
                            placeholder="email@email.com"
                            />
                        </div>
                    </form>
                </div>
            </div>
    </section>
    )
}
