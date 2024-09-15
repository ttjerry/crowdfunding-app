import React from "react";
const statistics = [
  {
    figure: "$89,914",
    label: "of $100,000 backed",
    line: true,
  },
  {
    figure: "5,007",
    label: "total backers",
    line: true,
  },
  {
    figure: "56",
    label: "days left",
    line: false,
  },
];

function Stats() {
  return (
    <div className="flex flex-col gap-10 p-10 px-12 rounded-xl bg-white w-5/6 lg:w-6/12">
      <div className="flex justify-center items-center lg:items-start self-center lg:self-auto flex-col lg:flex-row gap-10 ">
        {statistics.map((element) => (
          <React.Fragment>
            <div
              className={`lg:w-5/6  lg:pr-4 lg:border-r-2${
                element.line ? " lg:border-r-slate-300" : false
              }`}
            >
              <p className="font-bold text-3xl">{element.figure}</p>
              <p className="text-gray-400 text-sm">{element.label}</p>
            </div>
          </React.Fragment>
        ))}
        </div>
        <div className="w-full h-2 rounded-full bg-gray-300 self-center">
          <span className="flex rounded-full items-center justify-center h-full w-4/5 bg-[#3DB5AB]"></span>
        </div>
    </div>
  );
}

export default Stats;
