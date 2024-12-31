import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h2>About Us</h2>
      <p>We are ABC Company, committed to excellence.</p>
      <img
        src="https://fellow.app/wp-content/uploads/2020/10/Types-Company-Culture.jpg"
        alt="About Us"
        style={styles.image}
      />
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} ABC Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
  
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default AboutUs;