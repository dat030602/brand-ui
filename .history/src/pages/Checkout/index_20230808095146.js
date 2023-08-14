import { useEffect } from "react";
import Checkout from "~/layouts/components/Checkout";

function CheckoutPage(setDataModal, handleCloseModal, test) {
  useEffect(() => {
    console.log("TEST", test);
  });
  return (
    <>
      <Checkout />
    </>
  );
}

export default CheckoutPage;
