import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setconfirmPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setLoading(true); // loading while request
    setError(""); // Reset error message
    
    try {
      const response = await fetch("https://delta-indie.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json(); 

      if (response.ok) {
        localStorage.setItem("token", data.token); 
        navigate("/login"); 
      } else {
        setError(data.message || "Registrasi tidak berhasil. Coba lagi lain kali"); 
      }
    } catch (error) {
      setError("Terjadi kesalahan. Coba lagi nanti.");
    } finally {
      setLoading(false); //hide loading
    }

    if(password !== comfirmPassword) {
        return alert('Password harus sama!')
    }

  };

  return (
    <div className="">
      <div className="flex justify-center items-center h-screen bg-gray-200 w-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-xl font-bold mb-4 text-center">Registration</h2>

          {error && <p className="text-red-500">{error}</p>} {/* Tampilkan error jika ada */}

          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-2 border rounded text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 mb-4 border rounded text-white"
            value={password}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />

          <button
            className={`w-full text-white p-2 rounded ${loading ? "bg-gray-400" : "bg-violet-500 hover:bg-violet-600"}`}
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
