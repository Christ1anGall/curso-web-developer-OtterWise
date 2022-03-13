import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import "./authStatus.css";

export default function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>Você não está logado</p>;
  }
  return (
    <p className="userStatus">
      <p className="userMessage">Bem vindo, {auth.user.name}!</p>
      <button className="userButton" onClick={() => auth.logout(() => navigate("/"))}>Sair </button>
    </p>
  );
}
