import React from "react";
import axios from "axios";

export default class SendProducts extends React.Component {
  onSend() {
    let data = {
      companyId: 321,
      created: new Date(),
      createdBy: "baselito",
      paymentMethod: "MasterCard",
      totalPrice: 300,
      status: 2,
      orderRows: []
    };

    axios
      .post(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/orders",
        JSON.stringify(data),
        { headers: { "Content-Type": "application/json" } }
      )
      .then(result => console.log(result));
  }

  render() {
    return (
      <div>
        <button onClick={this.onSend}>Send order</button>
      </div>
    );
  }
}
