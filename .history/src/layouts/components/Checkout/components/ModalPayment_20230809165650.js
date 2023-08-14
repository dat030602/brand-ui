import styles from "../Checkout.module.scss";
import stylesModal from "./Modal.module.scss";

const ModalPayment = () => {
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
                <i className="far fa-credit-card"></i>
              </div>
              <div className="text">
                <p>Pay with PayPal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${stylesModal["footer"]}`}>
        <button onClick={() => {}} className={`${stylesModal["cancelBtn"]}`}>
          Cancel
        </button>
        <button>Continue</button>
      </div>
    </>
  );
};

export default ModalPayment;
