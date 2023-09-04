import { useEffect } from "react";
import Checkout from "~/layouts/components/Checkout";

function CheckoutPage(setDataModal, handleCloseModal, modal) {
  return (
    <>
      <Checkout
        setDataModal={setDataModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}

export default CheckoutPage;
