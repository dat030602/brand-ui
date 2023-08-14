import { useState } from "react";
import stylesModal from "./Modal.module.scss";
const ModalAddress = (address, chooseTemp, handleCloseModal, setDataModal) => {
  return (
    <>
      <div className={`${stylesModal["title"]}`}>
        <h6>My Address</h6>
        <button
          onClick={() => {
            handleCloseModal();
          }}
          className={`${stylesModal["titleCloseBtn"]}`}
        >
          <i class="fa fa-close"></i>
        </button>
      </div>
      <div className="line mt-2 mb-2"></div>

      <div className={`${stylesModal["body"]}`}>
        <form>
          {address !== undefined &&
            Object.keys(address).map((index) => (
              <>
                <div style={{ display: "flex" }}>
                  <div>
                    <input
                      type="radio"
                      id={address[index].stt}
                      name="address_options"
                      value={address[index].stt}
                      checked={chooseTemp == index}
                      onChange={() => {
                        chooseTemp = index;
                        const temp = ModalAddress(
                          address,
                          chooseTemp,
                          handleCloseModal,
                          setDataModal
                        );
                        setDataModal(temp);
                      }}
                    />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <label for={address[index].stt}>
                      {address[index].SONHA_DUONG}
                      <br />
                      {address[index].TEN_PHUONG}, {address[index].TEN_THANHPHO}
                      , {address[index].TEN_TINH}
                    </label>
                  </div>
                </div>
                <div className="line mt-2 mb-2"></div>
              </>
            ))}
        </form>
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
        <button
          onClick={() => {
            console.log("Choose temp: ", address[chooseTemp]);
            // setChoose({
            //   data: address[chooseTemp],
            //   index: chooseTemp,
            // });
            handleCloseModal();
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ModalAddress;
