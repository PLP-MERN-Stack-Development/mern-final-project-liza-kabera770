import React, { useEffect, useState } from "react";
import axios from "axios";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    name: "",
    registrationNumber: "",
    type: "",
    capacity: "",
  });

  const fetchVehicles = async () => {
    const res = await axios.get("http://localhost:5000/api/vehicles");
    setVehicles(res.data);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/vehicles", form);
    fetchVehicles();
    setForm({
      name: "",
      registrationNumber: "",
      type: "",
      capacity: "",
    });
  };

  const deleteVehicle = async (id) => {
    await axios.delete(`http://localhost:5000/api/vehicles/${id}`);
    fetchVehicles();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Vehicle Management</h2>

      {/* Add Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-6">
        <input
          type="text"
          placeholder="Vehicle Name"
          className="border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Registration Number"
          className="border p-2"
          value={form.registrationNumber}
          onChange={(e) =>
            setForm({ ...form, registrationNumber: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Type (e.g car, truck)"
          className="border p-2"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />

        <input
          type="number"
          placeholder="Capacity"
          className="border p-2"
          value={form.capacity}
          onChange={(e) => setForm({ ...form, capacity: e.target.value })}
        />

        <button className="col-span-2 bg-blue-600 text-white p-2 rounded">
          Add Vehicle
        </button>
      </form>

      {/* Vehicle List */}
      <table className="w-full mt-8 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Reg No</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Capacity</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((v) => (
            <tr key={v._id}>
              <td className="p-2 border">{v.name}</td>
              <td className="p-2 border">{v.registrationNumber}</td>
              <td className="p-2 border">{v.type}</td>
              <td className="p-2 border">{v.capacity}</td>
              <td className="p-2 border">
                <button
                  onClick={() => deleteVehicle(v._id)}
                  className="bg-red-500 px-3 py-1 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vehicles;
