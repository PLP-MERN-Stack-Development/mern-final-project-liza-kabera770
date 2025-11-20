import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";

import VehicleList from "./pages/vehicles/VehicleList";
import AddVehicle from "./pages/vehicles/AddVehicle";
import EditVehicle from "./pages/vehicles/EditVehicle";

import DriverList from "./pages/drivers/DriverList";
import AddDriver from "./pages/drivers/AddDriver";
import EditDriver from "./pages/drivers/EditDriver";

import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect / → /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Vehicles */}
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/add" element={<AddVehicle />} />
          <Route path="/vehicles/edit/:id" element={<EditVehicle />} />

          {/* Drivers */}
          <Route path="/drivers" element={<DriverList />} />
          <Route path="/drivers/add" element={<AddDriver />} />
          <Route path="/drivers/edit/:id" element={<EditDriver />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
