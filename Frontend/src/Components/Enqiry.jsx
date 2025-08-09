import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
    preferredContact: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Enquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          propertyType: "",
          message: "",
          preferredContact: "",
        });
      } else {
        setStatus(`❌ ${data.error || "Failed to send enquiry"}`);
      }
    } catch (error) {
      setStatus("❌ Failed to send enquiry. Server not reachable.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="enquiry-container">
      <h2>Enquiry Form</h2>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Property Type:</label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Property Type --</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Land">Land</option>
          <option value="Commercial">Commercial</option>
        </select>

       <label>Preferred Contact:</label>
{/* <div className="radio-group">
  <label>
    <input
      type="radio"
      name="preferredContact"
      value="Whatsapp"
      checked={formData.preferredContact === "Whatsapp"}
      onChange={handleChange}
    /> Whatsapp
  </label>
  <label>
    <input
      type="radio"
      name="preferredContact"
      value="Email"
      checked={formData.preferredContact === "Email"}
      onChange={handleChange}
    /> Email
  </label>
  <label>
    <input
      type="radio"
      name="preferredContact"
      value="Phone"
      checked={formData.preferredContact === "Phone"}
      onChange={handleChange}
    /> Phone
  </label>
</div> */}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Send Enquiry
        </button>
      </form>

      {status && (
  <p 
    className="status-message"
    data-status={status.includes("✅") ? "success" : "error"}
  >
    {status}
  </p>
)}
    </div>
  );
};

export default Enquiry;
