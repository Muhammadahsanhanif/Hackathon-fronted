import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1F2937",
        padding: "10px",
        textAlign: "center",
        color: "white",
        width: "100%", // Ensure full width
        position: "relative", // Make sure it stays at the bottom
        bottom: "0", // Make the footer stick to the bottom of the screen
      }}
    >
      <p>
        Saylani Microfinance - Empowering communities through financial
        assistance
      </p>
      <Link
        to="/contact"
        style={{
          color: "#10B981",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Contact Us
      </Link>
    </footer>
  );
}
