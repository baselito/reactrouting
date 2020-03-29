import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Details() {
  let { id } = useParams();

  return <div>Product {id} details</div>;
}
