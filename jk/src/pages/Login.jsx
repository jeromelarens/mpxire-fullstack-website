import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/admin");
    } catch {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-lr from-slate-900 via-black to-slate-800">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white tracking-wide">
            Admin Access
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Secure management portal
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Email */}
        <div className="relative mb-6">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full bg-transparent border-b border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-orange-500 py-2"
            placeholder="Email"
          />
          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
            peer-placeholder-shown:top-2 
            peer-placeholder-shown:text-sm
            peer-focus:-top-3 
            peer-focus:text-xs 
            peer-focus:text-orange-400">
            Email Address
          </label>
        </div>

        {/* Password */}
        <div className="relative mb-8">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full bg-transparent border-b border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-orange-500 py-2"
            placeholder="Password"
          />
          <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all 
            peer-placeholder-shown:top-2 
            peer-placeholder-shown:text-sm
            peer-focus:-top-3 
            peer-focus:text-xs 
            peer-focus:text-orange-400">
            Password
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2.5 rounded-xl transition disabled:opacity-50"
        >
          {loading ? "Authenticating…" : "Enter Dashboard"}
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          © MPXIRE Admin System
        </p>
      </form>
    </div>
  );
}