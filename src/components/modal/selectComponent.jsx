import { useRef, useState } from "react";
import validation from "../../validation/validation";

function Comps({
  tag,
  pledge,
  left,
  figure,
  text,
  ids,
  isSelected,
  setSelected,
  modal,
  showModal,
  open,
  setOpen,
}) {
  const [error, handleError] = useState(false);
  //modal toggle close
  const radioRef = useRef(null);

  function changed(e) {
    setSelected(ids);
  }

  // function to validate the input
  function validate(e) {
    validation(e.target.value, figure) ? handleError(true) : handleError(false);
  }

  // console.log(typeof showModal);

  function showSuccess() {
    //close radio toggle content
    setSelected(false);
    //hide the modal select and bring forth the modal success
    setOpen(!open);
    //1s before the successful message modal pops up
    // setTimeout(() => {
    //   showModal(true);
    // }, 1000);
  }

  //validation to make sure the value inputted isn't greater than the "figure"
  return (
    <>
      <div className="border-gray-300 w-auto max-h-[100%] h-[90%] rounded-lg p-2 py-2 last:mb-24 border-2">
        <div className="flex flex-col gap-2 relative">
          <div className="flex lg:pl-0 pl-10 flex-row gap-2">
            <input
              type="radio"
              onChange={changed}
              className="accent-[#3DB5AB]"
              name="scale"
              id={ids}
              ref={radioRef}
            />
            <span className="flex flex-col lg:gap-4 px-6 justify-normal lg:flex-row">
              <h2 className="font-bold text-[14px]">{tag}</h2>
              <h2 className="text-[#3DB5AB] text-[14px] font-semibold">
                {pledge}
              </h2>
            </span>
          </div>
          <div className="flex px-6 float-end flex-col justify-end">
            <span className="self-end absolute top-0">
              <span className="font-bold text-[12px]">{figure}</span>
              <span className="text-[12px]">{left}</span>
            </span>
            <span className="pl-5 text-[13px]">{text}</span>
          </div>
        </div>
        {/* pledge input area */}
        {isSelected && (
          <div
            className={`flex justify-between px-6 gap-2 items-center lg:py-3 flex-col lg:flex-row border-t-2 lg:mt-2`}
            key={ids}
          >
            <h2 className="text-gray-400 lg:self-center">Enter your pledge</h2>
            <div className="flex flex-row lg:justify-end lg:gap-3 justify-evenly lg:w-4/12">
              <input
                placeholder="$"
                className={` 
                ${error ? "border-red-700 border-[1px]" : "border-gray-400"} 
                rounded-full border-[1px] w-5/12 lg:w-[50%] p-2 outline-none`}
                type="text"
                name="area"
                onChange={validate}
              />
              <button
                className="text-white lg:w-[50%] bg-[#3DB5AB] px-6 p-2 rounded-full text-[14px] disabled:opacity-55"
                disabled={error}
                onClick={showSuccess}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Comps;
