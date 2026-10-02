import { API_BASE_URL } from "../../utils/constants";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, LogIn } from "lucide-react";
import axios from "axios";

const AdminLogin = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        `${API_BASE_URL}/api/admin/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.success) {
        // Save admin token
        localStorage.setItem("adminToken", response.data.token);

        // Save admin information
        localStorage.setItem(
          "adminData",
          JSON.stringify(response.data.admin)
        );

        alert("Admin login successful!");

        navigate("/admin/dashboard");
        
        // console.log("Admin Login:", response.data.admin);
        // console.log("Token:", response.data.token);
      }
    } catch (error) {
      console.error("Admin Login Error:", error);

      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError(
          "Unable to login. Please make sure the server is running."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-800 text-white text-2xl mb-4">
            🌿
          </div>

          <h1 className="text-3xl font-bold text-emerald-900">
            Suman Day/Night Spa
          </h1>

          <p className="text-gray-500 mt-2">
            Admin Panel Login
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800">
              <LockKeyhole size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Admin Login
              </h2>

              <p className="text-sm text-gray-500">
                Login to manage Suman Day/Night Spa
              </p>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter admin email"
                  className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter admin password"
                  className="w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-800 hover:bg-emerald-900 disabled:bg-emerald-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition"
            >
              <LogIn size={19} />

              {loading ? "Logging in..." : "Login to Admin Panel"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Suman Day/Night Spa
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;