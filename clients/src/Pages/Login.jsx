import logo1 from "../assets/images/logo1.png";
import { useState } from "react";
const Login=()=>{
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
    const handleChange = (e) => {
      let name=e.target.name;
      let value=e.target.value;
  
      setUser({ ...user, [name]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
    }
    return(
    <section>
        <main>
          <div className="containter grid grid-cols-2">
          <div className="left-image">
          <img src={logo1} alt="fil the login"/>
          </div>
           <div className="right-form">
             <h1>Login</h1>
             <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email"  onChange={handleChange} id="email" value={user.email} name="email" placeholder="Enter the email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={handleChange} value={user.password}   name="password" placeholder="Enter the password" />
                </div>
                  <div className="btn">
                <button type="submit">Login</button>
                </div>
              </form>
             </div>
           </div>
          </div>
        </main>
       </section>
)};
export default Login;