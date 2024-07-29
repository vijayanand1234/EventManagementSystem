import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Bookings | Eventally"}
        imageUrl={"/signin.png"}
      />
      <BookingForm />
    </>
  );
};

export default Booking;
