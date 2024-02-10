import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Supportive Community",
    img: "https://images.unsplash.com/photo-1573165067541-4cd6d9837902?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBpbiUyMHRlY2h8ZW58MHx8MHx8fDA%3D",
    desc: "Join a supportive network of like-minded individuals who share your passion for technology. Whether you're seeking advice, looking for mentorship, or just want to connect with others, our community is here for you.",
  },
  {
    id: 2,
    title: "Carrer Development",
    img: "https://media.istockphoto.com/id/1087505706/photo/business-woman-climbing-up-on-hand-drawn-staircase-concept.webp?b=1&s=170667a&w=0&k=20&c=8Z6mhs5jDXVwoQdToDCxsEa6D_X8Riq6OhY7VlbUJYk=",
    desc: "Receive guidance and support for your career development journey. Whether you're looking for job opportunities, seeking career advice, or aiming for a promotion, our community can help you navigate the tech industry with confidence.",
  },
  {
    id: 3,
    title: "Learning Opportunities",
    img: "https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.webp?b=1&s=170667a&w=0&k=20&c=n5AHUpXa0UuMkN_Spug8-UMOiz4_-IrnjwkWe34ICiA=",
    desc: " Take advantage of learning resources, including workshops, webinars, and tutorials, covering a wide range of tech topics. From coding and programming languages to cybersecurity and artificial intelligence, there's always something new to discover.",
  },
  {
    id: 4,
    title: "Proper Mentorship",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnRvcnxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Receive personalized support and encouragement from mentors who genuinely care about your success. Whether you're facing obstacles in your career or seeking guidance on work-life balance, our mentors are here to listen, offer advice, and help you overcome challenges with confidence.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>What We Offer</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
