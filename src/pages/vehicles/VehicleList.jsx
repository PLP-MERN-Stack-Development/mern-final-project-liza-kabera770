import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  // Fetch vehicles
  const fetchVehicles = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/vehicles");
      const data = await res.json();
      setVehicles(data);
    } catch (err) {
      console.log("Error fetching vehicles:", err);
    }
  };

  // Delete a vehicle
  const deleteVehicle = async (id) => {
    if (!window.confirm("Delete this vehicle?")) return;
    try {
      await fetch(`http://localhost:5000/api/vehicles/${id}`, {
        method: "DELETE",
      });
      fetchVehicles();
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <div className="container">
      <h2>Vehicle List</h2>

      <Link to="/vehicles/add" className="btn btn-primary">
        Add New Vehicle
      </Link>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Plate No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v._id}>
              <td>{v.name}</td>
              <td>{v.type}</td>
              <td>{v.plate}</td>
              <td>
                <Link
                  to={`/vehicles/edit/${v._id}`}
                  className="btn btn-sm btn-warning me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteVehicle(v._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {vehicles.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center">
                No vehicles found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
