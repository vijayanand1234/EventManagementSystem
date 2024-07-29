import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [department, setDepartment] = useState("Select");
  const [vendorFirstName, setVendorFirstName] = useState("");
  const [vendorLastName, setVendorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Select Service",
    "Catering and Food Services",
    "Venue and Location",
    "Decor and Design",
    "Logistics and Transportation",
    "Marketing & Promotion",
    "Security and Safety",
    "Rentals and Supplies",
    "Technology Solutions",
    "Finance and Legal",
  ];

  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    const fetchVendors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/vendors",
        { withCredentials: true }
      );
      setVendors(data.doctors);
      console.log(data.doctors);
    };
    fetchVendors();
  }, []);
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/booking/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          booking_date: bookingDate,
          department,
          vendor_firstName: vendorFirstName,
          vendor_lastName: vendorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setNic(""),
        setDob(""),
        setGender(""),
        setBookingDate(""),
        setDepartment(""),
        setVendorFirstName(""),
        setVendorLastName(""),
        setHasVisited(""),
        setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleChange = (e) => {
     
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.slice(0, 10);
    
    setPhone(formattedValue);
};

  return (
    <>
      <div className="container form-component booking-form">
        <h2>Booking</h2>
        <form onSubmit={handleBooking}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={phone}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Aadhar Number"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Booking Date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </div>
          <div>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setVendorFirstName("");
                setVendorLastName("");
              }}
            >
              {departmentsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>
            <select
              value={`${vendorFirstName} ${vendorLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setVendorFirstName(firstName);
                setVendorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">Select Vendor</option>
              {vendors
                .filter((vendor) => vendor.vendorDepartment === department)
                .map((vendor, index) => (
                  <option
                    value={`${vendor.firstName} ${vendor.lastName}`}
                    key={index}
                  >
                    {vendor.firstName} {vendor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <textarea
            rows="10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>GET BOOKINGS</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
