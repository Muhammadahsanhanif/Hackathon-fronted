import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordPopup() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // React Router's navigation function

  const handleSave = () => {
    if (newPassword === "" || confirmPassword === "") {
      setError("Both fields are required!");
    } else if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      console.log("Password saved successfully:", newPassword); // Log the new password (optional)
      navigate("/dashboard"); // Navigate to the dashboard page
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">Update Password</h2>
        <div className="mb-4">
          <label htmlFor="new-password" className="block text-sm font-medium mb-1">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setError("")} // Optional: Close the popup or clear errors
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
