import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Olá, você está na home</h1>
      <Link to="/posts">Ir para pagina de Posts</Link>
    </div>
  );
}

