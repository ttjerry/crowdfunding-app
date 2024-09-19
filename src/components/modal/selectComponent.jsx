import { useState } from "react";

function Comps({ tag, pledge, left, figure, text, ids }) {
  const [selectedOptions, setSelectedOptions] = useState(false);

  function changed() {
    let radio = document.getElementsByName("scale");
    for (let i = 0; i < radio.length; i++) {
      const element = radio[i].checked&&radio[i].value==selectedOptions;
      // console.log(element);
      setSelectedOptions(element); 
    }
  }

  //loop through the array of radio buttons to find out which is being clicked
  // console.log(change)

  return (
    <div className="border-gray-300 w-auto max-h-72 rounded-lg p-2 py-6 border-2">
      <div className="flex flex-col gap-2 relative">
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            onChange={changed}
            value={selectedOptions}
            className="accent-green-600"
            name=" scale"
            id={ids}
          />
          <span className="flex gap-4 px-6 justify-normal lg:flex-row">
            <h2 className="font-bold">{tag}</h2>
            <h2 className="text-[#3DB5AB] font-semibold">{pledge}</h2>
          </span>
        </div>
        <div className="flex px-6 float-end flex-col justify-end">
          <span className="self-end absolute top-0">
            {figure} {left}
          </span>
          <span className="pl-5">{text}</span>
        </div>
      </div>

      {selectedOptions ? (
        <div
          className={`flex justify-between px-6 items-center py-3 flex-row border-t-2 mt-6`
          }
          key={ids}
        >
          <h2 className="text-gray-400">Enter your pledge</h2>
          <div className="flex flex-row justify-evenly w-4/12">
            <input
              placeholder="$"
              className="rounded-full border-gray-400 border-[1px] w-4/12 p-2"
              type="text"
              name=""
              id=""
            />
            <button className="text-white bg-green-500 px-6 p-2 rounded-full text-[14px]">
              Continue
            </button>
          </div>
        </div>
      ) : (
        // setSelectedOptions()
        false
      )}
    </div>
  );
}

export default Comps;
