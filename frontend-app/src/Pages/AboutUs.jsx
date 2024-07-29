
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Eventally"}
        imageUrl={"/about.jpg"}
      />
      <Biography imageUrl={"/whower.jpg"} />
    </>
  );
};

export default AboutUs;
