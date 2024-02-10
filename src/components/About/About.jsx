import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="text-container">
        <h1>
          Our <span>Journey</span>
        </h1>
        <p className="typewriter">
          We are a passionate group of college students who have come together
          to address the gender gap in the tech industry and provide a
          supportive platform for women in technology. Recognizing the
          challenges and barriers that women often face in pursuing careers in
          tech, we decided to create a space where women can come together to
          learn, support each other, and grow professionally.
        </p>
        <a href="https://forms.gle/vXWaRMNQ9fvh41Lp7" target="_blank">
          <button className="btn">Join Us</button>
        </a>
      </div>
    </div>
  );
};

export default About;
