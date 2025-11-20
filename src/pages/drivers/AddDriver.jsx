import { useState } from "react";
import api from "../../api";

export default function AddDriver() {
  const [form, setForm] = useState({ name: "", licenseNumber: "", phone: "" });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const saveDriver = async () => {
    await api.post("/drivers", form);
    window.location.href = "/drivers";
  };

  return (
    <div>
      <h2>Add Driver</h2>

      <input name="name" placeholder="Driver Name" onChange={update} />
      <input name="licenseNumber" placeholder="License Number" onChange={update} />
      <input name="phone" placeholder="Phone" onChange={update} />

      <button onClick={saveDriver}>Save</button>
    </div>
  );
}
