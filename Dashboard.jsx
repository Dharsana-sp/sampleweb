import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Dashboard = () => {
  return (
    <div>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.yQBLji2k-Sl_riTZWC1oSQHaHM&pid=Api&P=0&h=180"
            alt="ABC Logo"
            style={styles.logo}                                                                                                                     
          />
          <h1 style={styles.title}>ABC Dashboard</h1>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li>
              <Link to="/" style={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={styles.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={styles.navLink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <footer style={styles.footer}>
        
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#f4f4f9",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "20px auto",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    borderRadius: "50%", // Makes the logo circular
    marginRight: "10px",
  },
  title: {
    color: "#333",
    fontSize: "24px",
  },
  nav: {
    display: "flex",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  },
  navLink: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  
};

export default Dashboard;
