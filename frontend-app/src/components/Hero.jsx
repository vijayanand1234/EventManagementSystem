
import PropTypes from 'prop-types';

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            The Eventally experience is unlike any other. Our full-service event planning and design team will guide you every step of the way, ensuring a stress-free experience from start to finish.<br />
            With us, <b>customization is guaranteed</b>. You will be paired with an Infinity Event Team who will collaborate with you to bring your vision to life. We will team up with some of the best vendors in Nashville and take care of all the details like meeting scheduling, delivery dates, payments, day-of setup, and more.<br />
            When its showtime, our staff will work tirelessly to guarantee your event is effortless and unforgettable.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
        </div>
      </div>
    </>
  );  
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Hero;
