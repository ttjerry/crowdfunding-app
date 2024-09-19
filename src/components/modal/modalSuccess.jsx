import { useState } from "react";
import React from "react";

function Complete() {
  const [visible, isVisible] = useState(false);
  function close() {
    isVisible(!visible);
  }
  return (
    <>
      {visible ? (
        <div className="flex justify-center items-center bg-[rgba(0,0,0,.6)] w-full h-screen fixed top-0 left-0">
          <div className="flex justify-around items-center flex-col p-6 rounded-xl bg-white w-2/6 h-2/4">
            <span>
              <img src="/images/icon-check.svg" alt="check" />
            </span>
            <span className="font-bold">Thanks for your support!</span>
            <span className="text-center text-gray-500 text-[13px]">
              Your pledge takes us one step closer to sharing Mastercraft.
              Bamboo Master monitor riser worldwide. You will get an email once
              our campaign is complete
            </span>
            <span>
              <button
                className="p-2 bg-[#3DB5AB] rounded-full px-6 text-[13px] text-white font-bold"
                onClick={close}
              >
                Got it
              </button>
            </span>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default Complete;
