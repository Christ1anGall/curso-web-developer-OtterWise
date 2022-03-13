import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicPage from "./routes/PublicPage";
import Layout from "./components/Layout";
import ProtectedPage from "./routes/ProtectedPage";
import Login from "./routes/Login";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import RegisterPets from "./routes/RegisterPets";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="login" element={<Login />} />
          <Route
            path="register-Pets"
            element={
              <RequireAuth>
                <RegisterPets />{" "}
              </RequireAuth>
            }
          />

          <Route
            path="private-page"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
