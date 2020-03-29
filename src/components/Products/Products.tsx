import React from "react";
import axios from "axios";

export default class Products extends React.Component {
  componentDidMount() {
    axios
      .get("http://medieinstitutet-wie-products.azurewebsites.net/api/products")
      .then(result => {
        console.log(result.data);
      });
  }

  render() {
    return <div>Products works</div>;
  }
}
