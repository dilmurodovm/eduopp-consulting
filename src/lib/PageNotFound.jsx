import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>404 — Page Not Found</h1>
      <p style={{ marginBottom: 20 }}>
        The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" style={{ color: "#7b1e2b", textDecoration: "underline" }}>
        Go back home
      </Link>
    </div>
  );
}
