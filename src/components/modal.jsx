import React, { useState, useEffect } from "react";

export default function Modal({ isOpen, closeModal }) {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [maxLoan, setMaxLoan] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [loanAmount, setLoanAmount] = useState(null);
  const [monthlyInstallment, setMonthlyInstallment] = useState(null);
  const [totalLoanAmount, setTotalLoanAmount] = useState(null);

  // New modal for CNIC, Email, and Name
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const categories = {
    "Wedding Loan": { subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"], maxLoan: 500000, period: 3 },
    "Home Construction Loan": { subcategories: ["Structure", "Finishing", "Loan"], maxLoan: 1000000, period: 5 },
    "Business Startup Loan": { subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"], maxLoan: 1000000, period: 5 },
    "Education Loan": { subcategories: ["University Fees", "Child Fees Loan"], maxLoan: "Based on requirement", period: 4 }
  };

  useEffect(() => {
    if (category) {
      setSubcategories(categories[category]?.subcategories || []);
      setMaxLoan(categories[category]?.maxLoan || "");
      setSubCategory("");
    }
  }, [category]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const validateForm = () => {
    if (!category) {
      alert("Please select a category.");
      return false;
    }
    if (!subCategory) {
      alert("Please select a subcategory.");
      return false;
    }
    if (!initialDeposit || initialDeposit <= 0) {
      alert("Please enter a valid initial deposit.");
      return false;
    }
    if (!loanPeriod || loanPeriod <= 0) {
      alert("Please enter a valid loan period.");
      return false;
    }
    if (loanPeriod > categories[category]?.period) {
      alert(`Loan period cannot exceed ${categories[category]?.period} years.`);
      return false;
    }
    return true;
  };

  const calculateLoanAmount = () => {
    if (typeof categories[category]?.maxLoan === "number") {
      return categories[category]?.maxLoan - initialDeposit;
    }
    return 0;
  };

  const calculateMonthlyInstallment = (loanAmount, months) => {
    return loanAmount / months;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const deposit = parseFloat(initialDeposit);
      const period = parseInt(loanPeriod);

      const loanAmountCalculated = calculateLoanAmount();
      const loanPeriodInMonths = period * 12;
      const monthlyInstallmentCalculated = calculateMonthlyInstallment(loanAmountCalculated, loanPeriodInMonths);

      setLoanAmount(Math.round(loanAmountCalculated));
      setTotalLoanAmount(Math.round(loanAmountCalculated + deposit));
      setMonthlyInstallment(Math.round(monthlyInstallmentCalculated));

      setShowDetailsModal(true);
    }
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    if (cnic && email && name) {
      alert("Details submitted successfully!");
      setShowDetailsModal(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  if (!isOpen) return null;

  return (
    <div>
      {/* Main Modal */}
      <div
        className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75"
        style={{ zIndex: 9999 }}
      >
        <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Loan Calculator</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">Select Category</option>
                {Object.keys(categories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            {category && (
              <div className="mb-4">
                <p className="text-gray-700">Maximum Loan: PKR {categories[category]?.maxLoan}</p>
                <p className="text-gray-700">Loan Period: {categories[category]?.period} years</p>
              </div>
            )}
            <div className="mb-4">
              <label className="block mb-2">Subcategory</label>
              <select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                disabled={!category}
              >
                <option value="">Select Subcategory</option>
                {subcategories.length > 0 ? (
                  subcategories.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))
                ) : (
                  <option value="">No subcategories available</option>
                )}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Initial Deposit</label>
              <input
                type="number"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter initial deposit"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Loan Period (in years)</label>
              <input
                type="number"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter loan period"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 text-gray-500 border rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-[#007bff] rounded-md hover:bg-[#0056b3]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* CNIC Modal */}
      {showDetailsModal && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75"
          style={{ zIndex: 10000 }}
        >
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <form onSubmit={handleDetailsSubmit}>
              <div className="mb-4">
                <label className="block mb-2">CNIC</label>
                <input
                  type="text"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter CNIC"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter Name"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowDetailsModal(false)}
                  className="px-4 py-2 text-gray-500 border rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-[#007bff] rounded-md hover:bg-[#0056b3]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
