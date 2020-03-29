import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  let location = useLocation();

  return (
    <div>
      <Link to="/">Page not found. Go to Home </Link>
      http://localhost:3000
      <code>{location.pathname}</code>
    </div>
  );
}
