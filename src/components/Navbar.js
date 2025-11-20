export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>FleetTrack Kenya</h2>
      <button style={styles.btn} onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    background: "#1a237e",
    color: "white",
  },
  title: {
    margin: 0,
  },
  btn: {
    padding: "8px 14px",
    background: "white",
    color: "#1a237e",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
