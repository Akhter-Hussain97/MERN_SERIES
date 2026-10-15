import admin from "../assets/images/admin.png";
import ready from "../assets/images/ready.png";
import Analytics from "../components/Analytics";
import "../index.css";
const Home=()=>{
    return(
       <section>
       <main>
          <div className="home-container">
            <div className="left-content">
               <div className="heading">
                 <h3>We are the World best company</h3>
                 <h1>Welcome to Shirani Tech Company</h1>
                 <p id="home-para">Are you ready to make your business to the next level
                  of cutting edge IT solutions? Look no further! Shirani Tech.
                  We appreciate providing innovative IT service and solution honor to
                  meet your business needs</p>
               </div>
               <div className="two-btn">
                 <button className="btn">Connect Now</button>
                 <button className="btn">Learn More</button>
               </div>
            </div>
            <div className="right-img">
              <img src={admin} alt="clients" />
            </div>
          </div>
            <Analytics/>
            <div className="home-lit">
                <div className="home-container">
                <div className="right-img">
              <img src={ready} alt="get ready to see the image" />
            </div>
            <div className="left-content">
               <div className="heading">
                 <h3>We are here to help you</h3>
                 <h1>Get Started Today</h1>
                 <p id="home-para">Ready to take the first step towards a more 
                 effecients and secure IT infrastructure. Contact us for a free consultation
                 and lets discuss how Shirani Tech can help your business in
                  its digital transformation </p>
               </div>
               <div className="two-btn">
                 <button className="btn">Connect Now</button>
                 <button className="btn">Learn More</button>
               </div>
            </div>
          </div>
            </div>
            <div className="home-footer">
                 <h4>&copy; Shirani Tech Company</h4>
            </div>
       </main>
       </section>
    );
};

export default Home;