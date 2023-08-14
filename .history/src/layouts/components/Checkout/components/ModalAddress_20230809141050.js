import { useState } from "react";
import stylesModal from "./Modal.module.scss";
const ModalAddress = (address, chooseTemp, handleCloseModal) => {
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
          <div style={{ display: "flex" }}>
            <div>
              <input
                type="radio"
                id="1"
                name="addressData_options"
                value="1"
                checked={chooseTemp === 1}
                onChange={() => {
                  console.log("clicked22");
                  chooseTemp = 1;
                }}
              />
            </div>
            <div style={{ marginLeft: "10px", width: "100%" }}>
              <label htmlFor="1" style={{ width: "100%" }}>
                "AAAA"
                <br />
                "BBBB"
              </label>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <input
                type="radio"
                id="2"
                name="addressData_options"
                value="2"
                checked={chooseTemp === 2}
                onChange={() => {
                  console.log("clicked");
                  chooseTemp = 2;
                  console.log(chooseTemp);
                }}
              />
            </div>
            <div style={{ marginLeft: "10px", width: "100%" }}>
              <label htmlFor="2" style={{ width: "100%" }}>
                "CCCC"
                <br />
                "d"
              </label>
            </div>
          </div>
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
