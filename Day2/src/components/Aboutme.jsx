import aboutImg from "../assets/images/about/about.png";

function Aboutme() {
  return (
    <div className="about-container">
      <img className="about-image" src={aboutImg} alt="personal photo" />

      <div className="rectangle1"></div>
      <div className="rectangle2"></div>

      <section>
        <h2>About Us</h2>
        <p>
        At [Your Yoga Studio], we believe in the transformative power of yoga to nourish the body, calm the mind, and uplift the spirit. Nestled in the heart of [Your Location], our studio is a sanctuary where individuals of all ages and abilities can discover the profound benefits of yoga practice.        </p>
      </section>
    </div>
  );
}

export default Aboutme;
