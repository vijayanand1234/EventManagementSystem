import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const AddNewVendor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [vendorDepartment, setVendorDepartment] = useState("");
  const [venAvatar, setVenAvatar] = useState("");
  const [venAvatarPreview, setVenAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
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

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setVenAvatarPreview(reader.result);
      setVenAvatar(file);
    };
  };

  const handleAddNewVendor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("vendorDepartment", vendorDepartment);
      formData.append("venAvatar", venAvatar);
      await axios
        .post("http://localhost:4000/api/v1/user/vendor/addnew", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page">
      <section className="container add-vendor-form">
        <img src="/logo.png" alt="logo" className="logo"/>
        <h1 className="form-title">REGISTER A NEW VENDOR</h1>
        <form onSubmit={handleAddNewVendor}>
          <div className="first-wrapper">
            <div>
              <img
                src={
                  venAvatarPreview ? `${venAvatarPreview}` : "/venHolder.png"
                }
                alt="Vendor Avatar"
              />
              <input type="file" onChange={handleAvatar} />
            </div>
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
                onChange={(e) => {
                  const input = e.target.value;
                  const onlyNums = input.replace(/\D/g, ''); // Remove non-digit characters
                  if (onlyNums.length <= 10) {
                    setPhone(onlyNums);
                  }
    
                }}
              />
              <input
                type="number"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
              <input
                type={"date"}
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled hidden>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <select
                value={vendorDepartment}
                onChange={(e) => {
                  setVendorDepartment(e.target.value);
                }}
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => {
                  return (
                    <option value={depart} key={index}>
                      {depart}
                    </option>
                  );
                })}
              </select>
              <button type="submit">Register New Vendor</button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default AddNewVendor;
