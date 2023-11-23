import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import { AuthProvider } from "./AuthContext";
import { Login, Teacher, Hw } from "./routes/Routes";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/teacher/:id" element={<Teacher />} />
          <Route path="/homework/:id" element={<Hw />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
