import { useEffect, useState } from "react";
import api from "../../api";

export default function AssignmentsList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/assignments").then((res) => setList(res.data));
  }, []);

  return (
    <div>
      <h2>Assignments</h2>
      <a href="/assignments/add" className="btn">Assign Driver</a>

      <table>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {list.map((a) => (
            <tr key={a._id}>
              <td>{a.vehicleId?.plate}</td>
              <td>{a.driverId?.name}</td>
              <td>{new Date(a.assignedDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
