import image1 from "../assets/images/Team/kidan.jpg";
import image2 from "../assets/images/Team/louis.jpg";
import image3 from "../assets/images/Team/rosh.jpg";
import image4 from "../assets/images/Team/Abdulwase.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Ourteam = () => {
  const cardsData = [
    {
      id: 1,
      title: "Kidan",
      Linkedin: "https://www.linkedin.com/in/abdulwase-naeemi/",
      Github: "https://github.com/Naeemi7",
      image: image2,
    },
    {
      id: 2,
      title: "Stella",
      Linkedin: "https://www.linkedin.com/in/roshini-muralidharan/",
      Github: "https://github.com/roshinimurali",
      image: image1,
    },
    {
      id: 3,
      title: "Kate Adbo",
      Linkedin: "https://www.linkedin.com/in/louisclarencepeter/",
      Github: "https://github.com/louisclarencepeter",
      image: image3,
    },
    {
      id: 4,
      title: "Noufal Ansari",
      Linkedin: "https://www.linkedin.com/in/kidan-lakew/",
      Github: "https://github.com/Kidan-Tekelearegy",
      image: image4,
    },
  
  ];
  return (
    <div className="ourteam">
      <h2 className="teamheading">Our Teachers</h2>
      <div className="profilecard">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} className="img-profile" alt="" />
            <h4>{card.title}</h4>
            <div className="icon-container">
              {" "}
              <a href={card.Linkedin} target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="icon" />{" "}
              </a>
              <a href={card.Github} target="_blank" rel="noopener noreferrer">
                <BsGithub className="icon" />{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
