import { ToastContainer, toast } from 'react-toastify';
import InputMask from "react-input-mask";

function Login() {
  return (
    <>
      <ToastContainer />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Login
          </h2>
          <form>
            {/* CNIC Input */}
            <div className="mb-4">
              <label
                htmlFor="cnic"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CNIC
              </label>
              <InputMask
                mask="99999-9999999-9"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="XXXXX-XXXXXXX-X"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
