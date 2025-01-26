import React from "react";
import LoanRequestsTable from "../components/LoanRequestsTable";

// Wedding Loans Data
const weddingLoanData = [
  {
    id: 1,
    subcategory: "Valima",
    loanAmount: 3,
    loanPeriod: "3 years",
    applicant: "John Doe",
    cnic: "12345-6789012-3",
    status: "Pending",
  },
  {
    id: 2,
    subcategory: "Furniture",
    loanAmount: 4,
    loanPeriod: "3 years",
    applicant: "Alice Smith",
    cnic: "23456-7890123-4",
    status: "Accepted",
  },
  {
    id: 3,
    subcategory: "Valima Food",
    loanAmount: 2.5,
    loanPeriod: "3 years",
    applicant: "Sara Khan",
    cnic: "34567-8901234-5",
    status: "Pending",
  },
  {
    id: 4,
    subcategory: "Jahez",
    loanAmount: 5,
    loanPeriod: "3 years",
    applicant: "Imran Ali",
    cnic: "45678-9012345-6",
    status: "Pending",
  },
];

const WeddingLoanPage = () => {
  return (
    <LoanRequestsTable loanType="Wedding Loans" loanData={weddingLoanData} />
  );
};

export default WeddingLoanPage;
