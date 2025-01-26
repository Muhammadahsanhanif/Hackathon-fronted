import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Authcontext } from '../contexts/usercontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserProfile() {
    const { user, logout } = useContext(Authcontext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleSignout = () => {
        toast.success("User Logged out Successfully", {
            position: "top-center",
            autoClose: 2000,
        });
        setTimeout(() => {
            logout();
            navigate("/register");
        }, 3000);
    };

    return (
        <>
            <ToastContainer />
            <div className="max-w-xl mx-auto mt-10 p-8 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">User Profile</h1>
                <div className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Info</h2>
                    {user ? (
                        <div className="space-y-3">
                            <p className="text-gray-600"><strong className="text-gray-800">Name:</strong> {user.fullname}</p>
                            <p className="text-gray-600"><strong className="text-gray-800">Email:</strong> {user.email}</p>
                            <p className="text-gray-600"><strong className="text-gray-800">Phone:</strong> {user.phoneNumber}</p>
                            <p className="text-gray-600"><strong className="text-gray-800">ID:</strong> {user._id}</p>
                        </div>
                    ) : (
                        <p className="text-gray-600">Loading user info...</p>
                    )}
                </div>
                <div className="mt-6 bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    <div className="text-center">
                        <button
                            onClick={handleSignout}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300">
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
