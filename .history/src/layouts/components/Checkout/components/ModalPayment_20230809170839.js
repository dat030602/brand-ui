import styles from "../Checkout.module.scss";
import stylesModal from "./Modal.module.scss";

const ModalPayment = (handleCloseModal) => {
  return (
    <>
      <div className={`${stylesModal["title"]}`}>
        <h6>Choose payment</h6>
      </div>
      <div className="line mt-2 mb-2"></div>

      <div className={`${stylesModal["body"]}`}>
        <div className={`${styles["payment-type"]}`}>
          <div className={`${styles["types"]} flex justify-space-between`}>
            <div className={`${styles["type"]} ${styles["selected"]}`}>
              <div className={`${styles["logo"]}`}>
                <i class="fab fa-paypal"></i>{" "}
              </div>
              <div className="text">
                <p>Pay with PayPal</p>
              </div>
            </div>
            <div className={`${styles["type"]} `}>
              <div className={`${styles["logo"]}`}>
                <svg className="mr-2" data-src="./assets/svg/vnpay.svg"></svg>
              </div>
              <div className="text">
                <p>Pay with PayPal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${stylesModal["footer"]}`}>
        <button
          onClick={() => {
            handleCloseModal();
          }}
          className={`${stylesModal["cancelBtn"]}`}
        >
          Cancel
        </button>
        <button>Continue</button>
      </div>
    </>
  );
};

export default ModalPayment;
