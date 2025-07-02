import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li>
          <Link to="/">🏠 Accueil</Link>
        </li>
        <li>
          <Link to="/movies">🎬 Films</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
