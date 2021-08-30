import React from "react";
import Appbar from "../components/Appbar";

function Cart() {
  return (
    <div>
      <Appbar isLogo={false} isBack={false} title="My Cart" color="primary" />
    </div>
  );
}

export default Cart;
