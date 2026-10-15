import { NavLink } from "react-router-dom";
import "../index.css";
const Errorbug=()=>{
    return(
      <section className="error-sec">
        <main>
          <div className="error-container">
          <div className="header"><h1>404</h1></div>
            <div className="err"><h2>SORRY PAGE NOT FOUND</h2></div>
            <div className="err-content">
                <p>
               Oops! It seems like the page you are trying to access doesn't exists.
               If you before there's on issues. feel free to report it.and we will look in it.
                </p>
            </div>
            <div className="btnn">
                <NavLink to="/">return home</NavLink>
                <NavLink to="/contact">Report Problem</NavLink>
            </div>
          </div>
        </main>
      </section>
    )
}
export default Errorbug;