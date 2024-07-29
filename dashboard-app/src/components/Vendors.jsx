import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import './Vendors.css';  // Assuming you have a CSS file for styling

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/vendors",
          { withCredentials: true }
        );
        setVendors(data.vendors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchVendors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page vendors">
      <h1>VENDORS</h1>
      <div className="banner1">
        {vendors && vendors.length > 0 ? (
          vendors.map((vendor) => (
            <div className="card1" key={vendor.id}>
              <div className="card-header">
                <img
                  src={vendor.venAvatar && vendor.venAvatar.url}
                  alt={`${vendor.firstName} ${vendor.lastName}'s avatar`}
                  className="avatar12"
                />
                <h2>{`${vendor.firstName} ${vendor.lastName}`}</h2>
              </div>
              <div className="card-details">
                <p>
                  <strong>Email -</strong> {vendor.email}<br/>
                  <strong>Phone -</strong> {vendor.phone}<br/>
                  <strong>DOB -</strong> {vendor.dob.substring(0, 10)}<br/>
                  <strong>Department -</strong> {vendor.vendorDepartment}<br/>
                  <strong>NIC -</strong> {vendor.nic}<br/>
                  <strong>Gender -</strong> {vendor.gender}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2>No Registered Vendors Found!</h2>
        )}
      </div>
    </section>
  );
};

export default Vendors;
