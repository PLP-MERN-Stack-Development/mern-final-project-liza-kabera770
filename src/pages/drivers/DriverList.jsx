import { useEffect, useState } from "react";
import api from "../../api";

export default function DriverList() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    api.get("/drivers").then((res) => setDrivers(res.data));
  }, []);

  return (
    <div>
      <h2>Drivers</h2>
      <a href="/drivers/add" className="btn">Add Driver</a>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>License</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((d) => (
            <tr key={d._id}>
              <td>{d.name}</td>
              <td>{d.licenseNumber}</td>
              <td>{d.phone}</td>
              <td>
                <a href={`/drivers/edit/${d._id}`}>Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
