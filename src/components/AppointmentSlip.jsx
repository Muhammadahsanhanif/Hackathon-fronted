import React, { useState } from "react";
import { QRCode } from "qrcode.react";
import { jsPDF } from "jspdf";

export default function Requests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      status: "Pending",
      amount: 50000,
      purpose: "Education",
    },
    {
      id: 2,
      status: "Approved",
      amount: 100000,
      purpose: "Medical",
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
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

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
    // Submit guarantors and additional details to the backend (simulated here)
    console.log("Guarantors:", guarantors);
    console.log("Additional Info:", additionalInfo);
    setIsSubmitted(true); // Trigger appointment slip display
    alert("Details submitted successfully!");
  };

  const generateSlip = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Add text to PDF (Token, Appointment Details, etc.)
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Appointment Slip", 20, 20);

    // Appointment Details
    doc.setFontSize(12);
    doc.text(`Token Number: ${Math.floor(Math.random() * 1000000)}`, 20, 40); // Random token number
    doc.text(`Date: 2025-02-01`, 20, 50); // Static Date for now
    doc.text(`Time: 10:00 AM`, 20, 60); // Static Time for now
    doc.text(`Office Location: ABC Organization Office, Main Street, City`, 20, 70);

    // Generate QR Code and add to PDF
    const qrCodeData = JSON.stringify({
      tokenNumber: Math.floor(Math.random() * 1000000),
      date: "2025-02-01",
      time: "10:00 AM",
      officeLocation: "ABC Organization Office, Main Street, City",
    }); // Convert the appointment details to JSON string for QR Code
    const qrCodeImage = new Image();
    qrCodeImage.src = QRCode.toDataURL(qrCodeData); // Generate QR code data URL

    qrCodeImage.onload = () => {
      doc.addImage(qrCodeImage, "PNG", 150, 40, 40, 40); // Place QR code on PDF
      doc.save("appointment-slip.pdf"); // Save as PDF
    };
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Loan Requests</h1>

      {/* Loan Requests List */}
      {!selectedRequest && !isSubmitted && (
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
              <p><strong>Purpose:</strong> {request.purpose}</p>
            </div>
          ))}
        </div>
      )}

      {/* Selected Request Details */}
      {selectedRequest && !isSubmitted && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Request Details - #{selectedRequest.id}</h2>
          <p><strong>Status:</strong> {selectedRequest.status}</p>
          <p><strong>Amount:</strong> Rs. {selectedRequest.amount}</p>
          <p><strong>Purpose:</strong> {selectedRequest.purpose}</p>

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
              <input
                type="text"
                placeholder="CNIC (XXXXX-XXXXXXX-X)"
                value={guarantor.cnic}
                onChange={(e) => handleGuarantorChange(index, "cnic", e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
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

      {/* Appointment Slip */}
      {isSubmitted && (
        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
          <p><strong>Token Number:</strong> {Math.floor(Math.random() * 1000000)}</p>
          <p><strong>Date:</strong> 2025-02-01</p>
          <p><strong>Time:</strong> 10:00 AM</p>
          <p><strong>Office Location:</strong> ABC Organization Office, Main Street, City</p>

          <div className="mb-4">
            <QRCode value={JSON.stringify({
              tokenNumber: Math.floor(Math.random() * 1000000),
              date: "2025-02-01",
              time: "10:00 AM",
              officeLocation: "ABC Organization Office, Main Street, City",
            })} size={128} />
          </div>

          <button
            onClick={generateSlip}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Download Appointment Slip
          </button>
        </div>
      )}
    </div>
  );
}
