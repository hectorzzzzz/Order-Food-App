import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./menu/page";
import Login from "./login/page";
import Register from "./register/page";

function App() {
  return (
    <Router>
      <Routes>
        {/* Saat pertama kali aplikasi dijalankan, langsung ke halaman login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
