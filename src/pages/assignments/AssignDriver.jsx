import { useEffect, useState } from "react";
import api from "../../api";

export default function AssignDriver() {
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [form, setForm] = useState({ vehicleId: "", driverId: "" });

  useEffect(() => {
    api.get("/vehicles").then((res) => setVehicles(res.data));
    api.get("/drivers").then((res) => setDrivers(res.data));
  }, []);

  const assign = async () => {
    await api.post("/assignments", form);
    window.location.href = "/assignments";
  };

  return (
    <div>
      <h2>Assign Driver to Vehicle</h2>

      <select
        onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}
      >
        <option>Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v._id} value={v._id}>{v.plate}</option>
        ))}
      </select>

      <select
        onChange={(e) => setForm({ ...form, driverId: e.target.value })}
      >
        <option>Select Driver</option>
        {drivers.map((d) => (
          <option key={d._id} value={d._id}>{d.name}</option>
        ))}
      </select>

      <button onClick={assign}>Assign</button>
    </div>
  );
}
