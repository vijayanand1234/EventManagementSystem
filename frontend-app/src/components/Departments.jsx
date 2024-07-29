import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Catering and Food Services",
      imageUrl: "/departments/catering.jpg",
    },
    {
      name: "Venue and Location",
      imageUrl: "/departments/venue.jpg",
    },
    {
      name: "Decor and Design",
      imageUrl: "/departments/decor.jpg",
    },
    {
      name: "Logistics and Transportation",
      imageUrl: "/departments/transport.png",
    },
    {
      name: "Marketing and Promotions",
      imageUrl: "/departments/marketting.jpg",
    },
    {
      name: "Security and Safety",
      imageUrl: "/departments/safety.jpg",
    },
    {
      name: "Rentals and Supplies",
      imageUrl: "/departments/rental.jpg",
    },
    {
      name: "Technology Solutions",
      imageUrl: "/departments/tech.jpg",
    },
    {
      name: "Finance and Legal",
      imageUrl: "/departments/legal.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, 
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, 
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, 
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>EVENT SERVICES</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["medium","small"]} >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt={depart.name} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
