import React from "react";

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>Email: contact@abc.com</p>
      <p>Phone: +1234567890</p>
      <img
        src="https://wallpaperaccess.com/full/3000583.jpg"
        alt="Contact Us"
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

export default ContactUs;
