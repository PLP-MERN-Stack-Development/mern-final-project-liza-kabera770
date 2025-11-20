import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListDrivers() {
  const [drivers, setDrivers] = useState([]);

  const fetchDrivers = async () => {
    const res = await fetch("http://localhost:5000/api/drivers");
    const data = await res.json();
    setDrivers(data);
  };

  const deleteDriver = async (id) => {
    await fetch(`http://localhost:5000/api/drivers/${id}`, { method: "DELETE" });
    fetchDrivers();
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <div className="container">
      <h2>Drivers</h2>
      <Link to="/drivers/add" className="btn btn-primary mb-3">Add Driver</Link>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>License</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((d) => (
            <tr key={d._id}>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.licenseNumber}</td>
              <td>
                <Link to={`/drivers/edit/${d._id}`} className="btn btn-warning btn-sm">Edit</Link>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => deleteDriver(d._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListDrivers;
