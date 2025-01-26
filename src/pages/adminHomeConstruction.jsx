import React from "react";
import LoanRequestsTable from "../components/LoanRequestsTable";


// Home Construction Loans Data
const homeConstructionLoanData = [
  {
    id: 1,
    subcategory: "Structure",
    loanAmount: 6,
    loanPeriod: "5 years",
    applicant: "Ali Raza",
    cnic: "12345-1234567-8",
    status: "Pending",
  },
  {
    id: 2,
    subcategory: "Finishing",
    loanAmount: 5,
    loanPeriod: "5 years",
    applicant: "Muneeb Aslam",
    cnic: "23456-2345678-9",
    status: "Accepted",
  },
  {
    id: 3,
    subcategory: "Structure",
    loanAmount: 7,
    loanPeriod: "5 years",
    applicant: "Sara Ahmed",
    cnic: "34567-3456789-0",
    status: "Pending",
  },
  {
    id: 4,
    subcategory: "Finishing",
    loanAmount: 5.5,
    loanPeriod: "5 years",
    applicant: "Hassan Raza",
    cnic: "45678-4567890-1",
    status: "Accepted",
  },
  {
    id: 5,
    subcategory: "Structure",
    loanAmount: 6.5,
    loanPeriod: "5 years",
    applicant: "Zain Ali",
    cnic: "56789-5678901-2",
    status: "Pending",
  },
  {
    id: 6,
    subcategory: "Finishing",
    loanAmount: 4.5,
    loanPeriod: "5 years",
    applicant: "Rashid Khan",
    cnic: "67890-6789012-3",
    status: "Accepted",
  },
  {
    id: 7,
    subcategory: "Structure",
    loanAmount: 8,
    loanPeriod: "5 years",
    applicant: "Sana Malik",
    cnic: "78901-7890123-4",
    status: "Pending",
  },
  {
    id: 8,
    subcategory: "Finishing",
    loanAmount: 5,
    loanPeriod: "5 years",
    applicant: "Ayesha Hussain",
    cnic: "89012-8901234-5",
    status: "Accepted",
  },
  {
    id: 9,
    subcategory: "Structure",
    loanAmount: 7.5,
    loanPeriod: "5 years",
    applicant: "Farhan Ali",
    cnic: "90123-9012345-6",
    status: "Pending",
  },
  {
    id: 10,
    subcategory: "Finishing",
    loanAmount: 6,
    loanPeriod: "5 years",
    applicant: "Omer Shah",
    cnic: "01234-0123456-7",
    status: "Accepted",
  },
];

const HomeConstructionLoanPage = () => {
  return (
    <LoanRequestsTable
      loanType="Home Construction Loans"
      loanData={homeConstructionLoanData}
    />
  );
};

export default HomeConstructionLoanPage;
