import React from "react";
import { motion } from "framer-motion";
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

const style = {
  content: "",
  height: "3px",
  width: "20px",
  backgroundColor: "red",
};

function Stats() {
  return (
    <motion.div
      initial={{ marginTop: "6rem" }}
      animate={{ marginTop: "0" }}
      transition={{ 
        duration: 1,
        delay: .2
       }}
      className="flex flex-col gap-10 p-10 px-12 rounded-xl shadow-2xl bg-white w-[90%] lg:w-6/12"
    >
      <div className="flex justify-center items-center lg:items-start self-center lg:self-auto flex-col lg:flex-row gap-10">
        {statistics.map((element) => (
          <React.Fragment>
            <div
              className={`lg:w-5/6 lg:pr-4 ${
                element.line
                  ? " lg:border-r-2 after:w-[75%] after:-bottom-3 after:left-[10%] relative after:absolute after:h-[3px] after:rounded-full after:bg-gray-200 lg:after:fixed lg:border-r-slate-300"
                  : false
              }`}
            >
              <p className="font-bold text-3xl">{element.figure}</p>
              <p className="text-gray-400 text-sm ">{element.label}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="w-full h-2 rounded-full bg-gray-300 self-center">
        <span className="flex rounded-full items-center justify-center h-full w-4/5 bg-[#3DB5AB]"></span>
      </div>
    </motion.div>
  );
}

export default Stats;
