import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddVehicle() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    type: "",
    plate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/api/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      navigate("/vehicles");
    } catch (err) {
      console.log("Add vehicle error:", err);
    }
  };

  return (
    <div className="container">
      <h2>Add Vehicle</h2>

      <form onSubmit={handleSubmit} className="mt-3">
        <input
          type="text"
          name="name"
          placeholder="Vehicle Name"
          className="form-control mb-2"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="type"
          placeholder="Vehicle Type"
          className="form-control mb-2"
          value={form.type}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="plate"
          placeholder="Plate Number"
          className="form-control mb-2"
          value={form.plate}
          onChange={handleChange}
          required
        />

        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}
