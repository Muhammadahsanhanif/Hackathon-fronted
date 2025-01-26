import React, { useState } from "react";
import { jsPDF } from "jspdf";
import InputMask from "react-input-mask"; // Import InputMask

export default function Requests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      status: "Pending",
      amount: 50000,
      purpose: "Education", // Added purpose
      guarantors: [],
      additionalInfo: {},
    },
    {
      id: 2,
      status: "Approved",
      amount: 100000,
      purpose: "Medical", // Added purpose
      guarantors: [],
      additionalInfo: {},
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [guarantors, setGuarantors] = useState([
    { name: "", email: "", location: "", cnic: "" },
    { name: "", email: "", location: "", cnic: "" },
  ]);

  const [additionalInfo, setAdditionalInfo] = useState({
    address: "",
    phone: "",
  });

  const handleSelectRequest = (request) => {
    setSelectedRequest(request);
  };

  const handleGuarantorChange = (index, field, value) => {
    const updatedGuarantors = [...guarantors];
    updatedGuarantors[index][field] = value;
    setGuarantors(updatedGuarantors);
  };

  const handleAdditionalInfoChange = (field, value) => {
    setAdditionalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Submit guarantors and additional details to the backend
    console.log("Guarantors:", guarantors);
    console.log("Additional Info:", additionalInfo);
    alert("Details submitted successfully!");

    // Generate Appointment Slip PDF
    generateSlip();
  };

  const generateSlip = () => {
    const appointmentDetails = {
      tokenNumber: Math.floor(Math.random() * 1000000),
      date: "2025-02-01",
      time: "10:00 AM",
      officeLocation: "ABC Organization Office, Main Street, City",
    };

    // Create a new PDF document
    const doc = new jsPDF();

    // Add text to PDF (Token, Appointment Details, etc.)
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Appointment Slip", 20, 20);

    // Appointment Details
    doc.setFontSize(12);
    doc.text(`Token Number: ${appointmentDetails.tokenNumber}`, 20, 40);
    doc.text(`Date: ${appointmentDetails.date}`, 20, 50);
    doc.text(`Time: ${appointmentDetails.time}`, 20, 60);
    doc.text(`Office Location: ${appointmentDetails.officeLocation}`, 20, 70);

    // Save as PDF
    doc.save("appointment-slip.pdf"); // Save the PDF with the appointment details
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Loan Requests</h1>

      {/* Loan Requests List */}
      {!selectedRequest && (
        <div className="grid grid-cols-1 gap-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white p-4 rounded-lg shadow cursor-pointer"
              onClick={() => handleSelectRequest(request)}
            >
              <h2 className="text-lg font-semibold">Request #{request.id}</h2>
              <p><strong>Status:</strong> {request.status}</p>
              <p><strong>Amount:</strong> Rs. {request.amount}</p>
              <p><strong>Purpose:</strong> {request.purpose}</p> {/* Display purpose */}
            </div>
          ))}
        </div>
      )}

      {/* Selected Request Details */}
      {selectedRequest && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Request Details - #{selectedRequest.id}</h2>
          <p><strong>Status:</strong> {selectedRequest.status}</p>
          <p><strong>Amount:</strong> Rs. {selectedRequest.amount}</p>
          <p><strong>Purpose:</strong> {selectedRequest.purpose}</p> {/* Display purpose in details */}

          <h3 className="text-lg font-semibold mt-6 mb-4">Guarantors' Information</h3>
          {guarantors.map((guarantor, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">Guarantor {index + 1}</h4>
              <input
                type="text"
                placeholder="Name"
                value={guarantor.name}
                onChange={(e) => handleGuarantorChange(index, "name", e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={guarantor.email}
                onChange={(e) => handleGuarantorChange(index, "email", e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-2"
              />
              <input
                type="text"
                placeholder="Location"
                value={guarantor.location}
                onChange={(e) => handleGuarantorChange(index, "location", e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-2"
              />
              <InputMask
                mask="99999-9999999-9"
                value={guarantor.cnic}
                onChange={(e) => handleGuarantorChange(index, "cnic", e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="CNIC (XXXXX-XXXXXXX-X)"
              />
            </div>
          ))}

          <h3 className="text-lg font-semibold mt-6 mb-4">Additional Details</h3>
          <input
            type="text"
            placeholder="Address"
            value={additionalInfo.address}
            onChange={(e) => handleAdditionalInfoChange("address", e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-2"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={additionalInfo.phone}
            onChange={(e) => handleAdditionalInfoChange("phone", e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-2"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Submit Details
          </button>
        </div>
      )}
    </div>
  );
}
