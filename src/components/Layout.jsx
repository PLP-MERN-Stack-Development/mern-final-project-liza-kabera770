import { Link, Outlet } from "react-router-dom";
import "./Layout.css"; // optional if you want custom styles

export default function Layout() {
  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>FleetTrack</h2>

        <nav style={styles.nav}>
          <Link style={styles.link} to="/dashboard">Dashboard</Link>
          <Link style={styles.link} to="/vehicles">Vehicles</Link>
          <Link style={styles.link} to="/drivers">Drivers</Link>
          <Link style={styles.link} to="/assignments">Assignments</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        <header style={styles.header}>
          <h1>Fleet Management System</h1>
        </header>

        <section style={styles.content}>
          <Outlet />  
        </section>
      </main>
    </div>
  );
}

/* SIMPLE INLINE STYLES */
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "240px",
    background: "#0A2A43",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    marginBottom: "30px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  main: {
    flex: 1,
    background: "#F5F7FA",
  },
  header: {
    padding: "20px",
    background: "#fff",
    borderBottom: "1px solid #ddd",
  },
  content: {
    padding: "20px",
  },
};
