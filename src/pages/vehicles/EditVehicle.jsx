import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditVehicle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({
    plateNumber: "",
    model: "",
    capacity: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/vehicles/${id}`, vehicle);
      navigate("/vehicles");
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Edit Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <label>Plate Number</label>
        <input
          type="text"
          name="plateNumber"
          value={vehicle.plateNumber}
          onChange={handleChange}
          required
        />

        <label>Model</label>
        <input
          type="text"
          name="model"
          value={vehicle.model}
          onChange={handleChange}
          required
        />

        <label>Capacity</label>
        <input
          type="number"
          name="capacity"
          value={vehicle.capacity}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Vehicle</button>
      </form>
    </div>
  );
}
