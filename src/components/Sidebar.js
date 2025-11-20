import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h3>Menu</h3>
      <Link to="/" style={styles.link}>Dashboard</Link>
      <Link to="/vehicles" style={styles.link}>Vehicles</Link>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#e8eaf6",
    padding: "20px",
    height: "100vh",
  },
  link: {
    display: "block",
    marginBottom: "15px",
    textDecoration: "none",
    color: "#1a237e",
    fontWeight: "bold",
  },
};
