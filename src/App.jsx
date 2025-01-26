import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import PasswordPopup from "./pages/addNewpassword";
import Requests from "./pages/requests";
import Business from "./pages/adminBusiness";
import Educational from "./pages/adminEducational";
import HomeConstructionLoanPage from "./pages/AdminHomeConstruction";
import WeddingLoanPage from "./pages/AdminWeddings";
import AdminPage from "./pages/adminPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex">
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/passwordpopup" element={<PasswordPopup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/adminHome" element={<AdminPage />} />
              <Route path="/adminwedding" element={<WeddingLoanPage />} />
              <Route path="/adminconstruction" element={<HomeConstructionLoanPage />} />
              <Route path="/admineducation" element={<Educational />} />
              <Route path="/adminbusiness" element={<Business />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
