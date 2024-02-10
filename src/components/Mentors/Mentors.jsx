import React from "react";
import "./Mentors.scss";
import mentor1 from "../../assets/mentor1.jpg";
import mentor2 from "../../assets/mentor2.jpg";
import mentor3 from "../../assets/mentor3.jpg";
import mentor4 from "../../assets/mentor4.png";
import linkedin from "../../assets/linkedin.png";

const Mentors = () => {
  return (
    <div>
      <div className="responsive-container-block container">
        <p className="text-blk team-head-text">Our Mentors</p>
        <div className="responsive-container-block">
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="card">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={mentor1} />
              </div>
              <p className="text-blk name">Simli Banerjee</p>
              <p className="text-blk position">SWE Intern @Google</p>
              {/* <p className="text-blk feature-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/simli-banerjee/"
                  target="_blank"
                >
                  <img className="twitter-icon" src={linkedin} />
                </a>
                <a
                  href="https://www.facebook.com/simli.banerjee.56"
                  target="_blank"
                >
                  <img className="facebook-icon" src="/facebook.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="card">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={mentor2} />
              </div>
              <p className="text-blk name">Ankit Kurmi</p>
              <p className="text-blk position">Associate SRE @Red Hat</p>
              {/* <p className="text-blk feature-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankitk152/"
                  target="_blank"
                >
                  <img className="twitter-icon" src={linkedin} />
                </a>
                <a
                  href="https://www.facebook.com/theankitkurmi"
                  target="_blank"
                >
                  <img className="facebook-icon" src="/facebook.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="card">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={mentor3} />
              </div>
              <p className="text-blk name">Sohini Ghosh</p>
              <p className="text-blk position">Software Engineer @Myntra</p>
              {/* <p className="text-blk feature-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sohini-ghosh-2020/"
                  target="_blank"
                >
                  <img className="twitter-icon" src={linkedin} />
                </a>
                <a
                  href="https://www.facebook.com/sohini.ghosh.58910"
                  target="_blank"
                >
                  <img className="facebook-icon" src="/facebook.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="card">
              <div className="team-image-wrapper">
                <img className="team-member-image" src={mentor4} />
              </div>
              <p className="text-blk name">Krishna Kant Mishra</p>
              <p className="text-blk position">
                Associate Software Engineer @Bentley Systems
              </p>
              {/* <p className="text-blk feature-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p> */}
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/krishnakantmishra39/"
                  target="_blank"
                >
                  <img className="twitter-icon" src={linkedin} />
                </a>
                <a
                  href="https://www.facebook.com/krishnakant.mishra.73113"
                  target="_blank"
                >
                  <img className="facebook-icon" src="/facebook.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
