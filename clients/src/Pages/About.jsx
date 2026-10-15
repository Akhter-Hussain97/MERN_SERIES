import { NavLink } from "react-router-dom";
import about from "../assets/images/about.png";
import Analytics from "../components/Analytics";
import "../index.css";
const About=()=>{
    return(
        <section className="about-sec">
            <main>
                <div className="about-container grid col-two">
                    <div className="hero-content">
                        <h1>Why Choose Us!</h1>
                        <p>
                            Expertise: Our team consists of experienced IT professional who are passionate about saying
                            up-to date with the latest industry trends.
                        </p>
                        <p>
                        Customizations: We understand that every business is unique. That's why we create solution
                        that are tailored to your specific needs and goals.
                        </p>
                        <p>
                            Customer-Centric Approach: we priortize your satisfaction and provide top-notch to
                            address your IT concerns.
                        </p>
                        <p>
                        Affordability:We offer competitive pricing without
                         compromising on the quality of our Services.
                        </p>
                        <p>
                            Reliability: Count on us to be there when you need us . We're committed to ensuring your
                            IT environment is reliable and available.
                        </p>
                        <div className="btn-about">
                         <NavLink to="/contact">
                         <button className="btn">Connect Now</button></NavLink>
                         <button className="btn sec-btn">learn more</button>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={about} alt="about" />
                    </div>
                </div>
                <Analytics/>
            </main>
        </section>
    )
};

export default About;