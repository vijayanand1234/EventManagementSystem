import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaPinterestSquare, FaSpotify } from 'react-icons/fa';
import { useState } from "react";
import './Footer.css';

const Footer = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isLocationHovered, setIsLocationHovered] = useState(false);
  
  const handleEmailMouseOver = () => {
    setIsEmailHovered(true);
  };

  const handleEmailMouseOut = () => {
    setIsEmailHovered(false);
  };

  const handleLocationMouseOver = () => {
    setIsLocationHovered(true);
  };

  const handleLocationMouseOut = () => {
    setIsLocationHovered(false);
  };
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="logo-img"/>
            </Link>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/booking"}>Booking</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone style={{color : '#2F4F4F'}}/>
              <span style={{color : '#2F4F4F'}}>123-456-789</span>
            </div>
            <div>
                <MdEmail style={{color : isEmailHovered ? '#C9302F' : '#2F4F4F',  transition: 'color 0.3s ease', cursor:'pointer'}} 
                  onMouseOver={handleEmailMouseOver}
                  onMouseOut={handleEmailMouseOut}
                />
                <span style={{color : '#2F4F4F'}}>hari@gmail.com</span>
            </div>

            <div>
              <FaLocationArrow style={{color : isLocationHovered ? '#0C8CDC' : '#2F4F4F',  transition: 'color 0.3s ease', cursor:'pointer'}} 
                onMouseOver={handleLocationMouseOver}
                onMouseOut={handleLocationMouseOut}
              />
              <span style={{color : '#2F4F4F'}}>Ballia, India</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="social">
        <span className="social-icons">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                <FaFacebookSquare className="social-icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hbs_1942/">
                <FaInstagram className="social-icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://in.pinterest.com/">
                <FaPinterestSquare className="social-icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hari-bhajan-singh-2967b320a/">
                <FaLinkedin className="social-icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/">
                <FaSpotify className="social-icon" />
            </a>
        </span>
        <span className="copyright">
            
              <p>© 2024 Eventally. Website design & Management by <b><a href="https://www.linkedin.com/in/hari-bhajan-singh-2967b320a/">hbs</a></b></p>
            
        </span>
      </div>
    </>
  );
};

export default Footer;
