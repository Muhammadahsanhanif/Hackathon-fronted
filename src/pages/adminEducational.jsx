import React from "react";
import LoanRequestsTable from "../components/LoanRequestsTable";


// Education Loans Data
const educationLoanData = [
  {
    id: 1,
    subcategory: "University Fees",
    loanAmount: 1.5,
    loanPeriod: "4 years",
    applicant: "Ali Hasan",
    cnic: "12345-1029384-5",
    status: "Pending",
  },
  {
    id: 2,
    subcategory: "Child Fees Loan",
    loanAmount: 1,
    loanPeriod: "4 years",
    applicant: "Sana Riaz",
    cnic: "23456-2938475-6",
    status: "Accepted",
  },
  {
    id: 3,
    subcategory: "University Fees",
    loanAmount: 2,
    loanPeriod: "4 years",
    applicant: "Ahmed Zafar",
    cnic: "34567-3847566-7",
    status: "Pending",
  },
  {
    id: 4,
    subcategory: "Child Fees Loan",
    loanAmount: 1.8,
    loanPeriod: "4 years",
    applicant: "Hina Shah",
    cnic: "45678-4758657-8",
    status: "Accepted",
  },
  {
    id: 5,
    subcategory: "University Fees",
    loanAmount: 2.5,
    loanPeriod: "4 years",
    applicant: "Farhan Nazeer",
    cnic: "56789-5679788-9",
    status: "Pending",
  },
  {
    id: 6,
    subcategory: "Child Fees Loan",
    loanAmount: 1.2,
    loanPeriod: "4 years",
    applicant: "Ayesha Khan",
    cnic: "67890-6589890-0",
    status: "Accepted",
  },
  {
    id: 7,
    subcategory: "University Fees",
    loanAmount: 2.8,
    loanPeriod: "4 years",
    applicant: "Samiullah Tariq",
    cnic: "78901-7698978-1",
    status: "Pending",
  },
  {
    id: 8,
    subcategory: "Child Fees Loan",
    loanAmount: 1.7,
    loanPeriod: "4 years",
    applicant: "Asim Shabbir",
    cnic: "89012-8789078-2",
    status: "Accepted",
  },
  {
    id: 9,
    subcategory: "University Fees",
    loanAmount: 3,
    loanPeriod: "4 years",
    applicant: "Uzma Rehman",
    cnic: "90123-9899087-3",
    status: "Pending",
  },
  {
    id: 10,
    subcategory: "Child Fees Loan",
    loanAmount: 1.9,
    loanPeriod: "4 years",
    applicant: "Nauman Qureshi",
    cnic: "01234-1011123-4",
    status: "Accepted",
  },
];

const Educational = () => {
  return (
    <LoanRequestsTable
      loanType="Education Loans"
      loanData={educationLoanData}
    />
  );
};

export default Educational;
