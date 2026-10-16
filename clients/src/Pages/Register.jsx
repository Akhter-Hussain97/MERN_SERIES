import logo from "../assets/images/logo.png";
import { useState } from "react";
import "../index.css";
const Register = () => {
    const [user, setUser] = useState({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
    const handleChange = (e) => {
      let name=e.target.name;
      let value=e.target.value;

    setUser({ ...user, [name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);

      try{
      const response=await fetch("http://localhost:5000/api/auth/register", 
        {
          method: "POST",
          header:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(user)
        }  
      );
      if(response.ok){
       setUser({username: "", email: "", phone: "", password: ""});
       alert("registration Successfully");
      }
    }
      catch(err){
        console.log('register', err);
    }
  }
  return (
   <section>
    <main>
      <div className="register-containter">
      <div className="left-image">
      <img src={logo} alt="clients" />
      </div>
       <div className="right-form">
         <h1>Register</h1>
         <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" onChange={handleChange} name="username" value={user.username} id="name" placeholder="Enter the username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email"  onChange={handleChange} id="email" value={user.email} name="email" placeholder="Enter the email"/>
            </div>
             <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="number" id="phone" onChange={handleChange} value={user.phone}  name="phone" placeholder="Enter the phone number"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handleChange} value={user.password}   name="password" placeholder="Enter the password" />
            </div>
              <div className="btn">
            <button type="submit">Register</button>
            </div>
          </form>
         </div>
       </div>
      </div>
    </main>
   </section>
  );
};

export default Register;