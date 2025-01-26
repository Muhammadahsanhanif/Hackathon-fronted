import React from "react";
import LoanRequestsTable from "../components/LoanRequestsTable";


// Business Startup Loans Data
const businessStartupLoanData = [
  {
    id: 1,
    subcategory: "Buy Stall",
    loanAmount: 3,
    loanPeriod: "5 years",
    applicant: "Faisal Khan",
    cnic: "12345-5432101-2",
    status: "Pending",
  },
  {
    id: 2,
    subcategory: "Advance Rent for Shop",
    loanAmount: 5,
    loanPeriod: "5 years",
    applicant: "Kashif Ali",
    cnic: "23456-6543210-3",
    status: "Accepted",
  },
  {
    id: 3,
    subcategory: "Shop Assets",
    loanAmount: 4,
    loanPeriod: "5 years",
    applicant: "Maya Aziz",
    cnic: "34567-7654321-4",
    status: "Pending",
  },
  {
    id: 4,
    subcategory: "Shop Machinery",
    loanAmount: 6,
    loanPeriod: "5 years",
    applicant: "Shan Shahid",
    cnic: "45678-8765432-5",
    status: "Accepted",
  },
  {
    id: 5,
    subcategory: "Buy Stall",
    loanAmount: 3.5,
    loanPeriod: "5 years",
    applicant: "Nashit Khan",
    cnic: "56789-9876543-6",
    status: "Pending",
  },
  {
    id: 6,
    subcategory: "Advance Rent for Shop",
    loanAmount: 4.5,
    loanPeriod: "5 years",
    applicant: "Sara Ali",
    cnic: "67890-1098765-7",
    status: "Accepted",
  },
  {
    id: 7,
    subcategory: "Shop Assets",
    loanAmount: 3,
    loanPeriod: "5 years",
    applicant: "Murtaza Zaman",
    cnic: "78901-2109876-8",
    status: "Pending",
  },
  {
    id: 8,
    subcategory: "Shop Machinery",
    loanAmount: 6.5,
    loanPeriod: "5 years",
    applicant: "Alia Nawaz",
    cnic: "89012-3210987-9",
    status: "Accepted",
  },
  {
    id: 9,
    subcategory: "Buy Stall",
    loanAmount: 4,
    loanPeriod: "5 years",
    applicant: "Kamran Shah",
    cnic: "90123-4321098-0",
    status: "Pending",
  },
  {
    id: 10,
    subcategory: "Advance Rent for Shop",
    loanAmount: 5.5,
    loanPeriod: "5 years",
    applicant: "Sadia Malik",
    cnic: "01234-5432109-1",
    status: "Accepted",
  },
];

const Business = () => {
  return (
    <LoanRequestsTable
      loanType="Business Startup Loans"
      loanData={businessStartupLoanData}
    />
  );
};

export default Business;
