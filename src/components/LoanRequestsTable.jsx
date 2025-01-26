import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoanRequestsTable = ({ loanType, loanData }) => {
  const navigate = useNavigate();
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [filteredRequests, setFilteredRequests] = useState(loanData);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [actionStatus, setActionStatus] = useState("");

  const filterRequests = () => {
    let filtered = loanData;

    if (selectedSubcategory) {
      filtered = filtered.filter(
        (request) => request.subcategory === selectedSubcategory
      );
    }

    if (selectedStatus && selectedStatus !== "All") {
      filtered = filtered.filter(
        (request) => request.status === selectedStatus
      );
    }

    setFilteredRequests(filtered);
  };

  React.useEffect(() => {
    filterRequests();
  }, [selectedSubcategory, selectedStatus]);

  const openModal = (request) => {
    setSelectedRequest(request);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedRequest(null);
    setActionStatus("");
  };

  const handleAction = (action) => {
    setActionStatus(action);
  };

  const handleSend = () => {
    alert(`Loan ${actionStatus}: Token Sent`);
    closeModal();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="bg-gray-50 text-gray-700 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="bg-teal-950 text-white text-center py-6 rounded-md shadow-md">
          <h1 className="text-3xl font-bold">
            Saylani Microfinance Loan Requests
          </h1>
          <p className="text-lg">
            Manage and process loan requests for various categories like Wedding, Education, Business, and more.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 transition"
          >
            Back
          </button>
        </div>

        {/* Loan Type */}
        <h2 className="text-2xl font-semibold mt-6 text-teal-700">
          {loanType} Loan Requests
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Filter by Subcategory:
            </label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">All Subcategories</option>
              {loanData
                .map((request) => request.subcategory)
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Filter by Status:
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="block w-full px-3 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500"
            >
              {["All", "Accepted", "Pending"].map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse bg-white shadow-md rounded-md overflow-hidden">
            <thead className="bg-teal-600 text-white">
              <tr>
                {[
                  "Applicant",
                  "CNIC",
                  "Subcategory",
                  "Loan Amount (PKR)",
                  "Loan Period",
                  "Initial Deposit (10%)",
                  "Status",
                  "Actions",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="text-left px-4 py-3 font-medium text-sm"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr
                  key={request.id}
                  className="even:bg-gray-100 odd:bg-white hover:bg-teal-100"
                >
                  <td className="px-4 py-3">{request.applicant}</td>
                  <td className="px-4 py-3">{request.cnic}</td>
                  <td className="px-4 py-3">{request.subcategory}</td>
                  <td className="px-4 py-3">{request.loanAmount} Lakh</td>
                  <td className="px-4 py-3">{request.loanPeriod}</td>
                  <td className="px-4 py-3">
                    {request.loanAmount * 0.1} PKR
                  </td>
                  <td className="px-4 py-3">{request.status}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => openModal(request)}
                      className="px-3 py-1 bg-slate-400 text-white text-sm rounded-md hover:bg-teal-600 transition"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {modalVisible && selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Loan Details
              </h2>
              <table className="w-full mb-4">
                <tbody>
                  {[
                    { label: "Name", value: selectedRequest.applicant },
                    { label: "CNIC", value: selectedRequest.cnic },
                    { label: "Subcategory", value: selectedRequest.subcategory },
                    { label: "Loan Amount (PKR)", value: selectedRequest.loanAmount },
                    { label: "Loan Period", value: selectedRequest.loanPeriod },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="font-semibold">{item.label}:</td>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => handleAction("Accepted")}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleAction("Rejected")}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Reject
                </button>
              </div>

              {actionStatus && (
                <p className="text-center text-sm font-medium mb-4">
                  You have {actionStatus} the loan.
                </p>
              )}

              <div className="flex justify-end gap-2">
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
                >
                  Send Token
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-10 bg-teal-950 text-white text-center py-4 rounded-md shadow-md">
          <p>Saylani Microfinance - Empowering communities through financial assistance</p>
          <Link to="/contact" className="text-teal-300 font-semibold">
            Contact Us
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default LoanRequestsTable;
