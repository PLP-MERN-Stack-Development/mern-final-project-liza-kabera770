import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditDriver = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [driver, setDriver] = useState({
    name: "",
    licenseNumber: "",
    phone: "",
  });

  // useEffect loads driver (function is INSIDE useEffect so no dependency warnings)
  useEffect(() => {
    const loadDriver = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/drivers/${id}`);
        const data = await res.json();
        setDriver({
          name: data.name,
          licenseNumber: data.licenseNumber,
          phone: data.phone,
        });
      } catch (error) {
        console.error("Error loading driver:", error);
      }
    };

    loadDriver();
  }, [id]);

  // Update driver input
  const handleChange = (e) =>
    setDriver({ ...driver, [e.target.name]: e.target.value });

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/api/drivers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(driver),
      });

      navigate("/drivers");
    } catch (error) {
      console.error("Error updating driver:", error);
    }
  };

  return (
    <div className="edit-driver-page">
      <h1>Edit Driver</h1>

      <form onSubmit={handleSubmit} className="form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={driver.name}
          onChange={handleChange}
          required
        />

        <label>License Number</label>
        <input
          type="text"
          name="licenseNumber"
          value={driver.licenseNumber}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={driver.phone}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">Update Driver</button>
      </form>
    </div>
  );
};

export default EditDriver;
