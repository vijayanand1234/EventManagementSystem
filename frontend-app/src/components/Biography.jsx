import PropTypes from 'prop-types';

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Who we are ?</h3>
          <p>
            Founded in 2024, Eventally was created out of a love for dynamic events and fine dining. Our goal is to provide unparalleled event services and outstanding customer service.<br></br><br></br>
            <b style={{ color: '#FF4F5A' }}>Why Eventally?</b> Because with us, there are infinite possibilities. Big or small, we are committed to creating one-of-a-kind events that your guests will remember for years. Customization is guaranteed, from your floor plan to your bar menu and signature lounge furniture.<br></br> 
            We work with the best vendors in the area to provide planning and design services at the venue of your dreams, and we also offer services at The Bridge Building Event Spaces and The Bell Tower at Cherokee Dock through exclusive venue management and in-house catering. We will work with you to bring your vision to life, and we will take care of all the details like meeting scheduling, delivery dates, payments, day-of setup, and more. When it`s showtime, our staff will work tirelessly to guarantee your event is effortless and unforgettable.
          </p>
    
        </div>
      </div>
    </>
  );
};

Biography.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Biography;
