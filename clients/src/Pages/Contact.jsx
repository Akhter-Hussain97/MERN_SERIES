 import form from "../assets/images/form.png";
 import { useState } from "react";
 import "../index.css";
const Contact=()=>{
    const [contact, setContact]=useState(
        {
            username: "",
            email: "",
            message: "",
        }
    );
    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setContact({...contact, [name]: value});
    };
    const HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(contact);
    };
    return(
        <section className="contact-sec">
        <main>
        <div className="contact-form">
               <h1>Contact Us</h1>
           <div className="form-img">
             <img src={form} alt="Form image "/>
        </div>
          <div className="form-da">
              <form onSubmit={HandleSubmit}>
                 <div><label>Name</label>
                 <input type="text" onChange={handleChange} name="username" value={contact.username} placeholder="Enter the username"/>
                 </div>
                  <div>
                      <label>Email</label>
                      <input type="email" onChange={handleChange} name="email" value={contact.email} placeholder="Enter the email"/>
                  </div>
                    <div>
                        <label>Message</label>
                         <textarea placeholder="Message" onChange={handleChange} value={contact.message} name="message"></textarea>
                    </div>
                     <div className="btns"><button type="submit">Submit</button></div>
              </form>
          </div>
        </div>
        </main>
         <section className="contact-map">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.2092999584615!2d74.31989827481479!3d31.518410974214863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190487cc9571bb%3A0xaf85a5e061138579!2sMuslim%20Town%2C%20Lahore%2C%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1792073440698!5m2!1sen!2s" 
         style={{border:0, width:"100%", height:"100%"}} allowFullScreen="" loading="lazy" 
         referrerPolicy="strict-origin-when-cross-origin"></iframe>
         </section>
        </section>
    )
};

export default Contact;