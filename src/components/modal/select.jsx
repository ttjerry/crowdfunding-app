import React from "react";
import { useState } from "react";
import Comps from "./selectComponent";
import { motion } from "framer-motion";

const inform = [
  {
    tag: "Pledge with no reward",
    text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    soldOut: false,
    idNum: 1,
  },
  {
    tag: "Bamboo Stand",
    pledge: "Pledge $25 or more",
    text: "You get an ergonomic stand made of natural bamboo. Youve helped us launch our promotional campaign and youll be added to a special Backer member list.",
    figure: 101,
    left: "left",
    soldOut: false,
    idNum: 2,
  },
  {
    tag: "Black Edition Stand",
    pledge: "Pledge $75 or more",
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    figure: 64,
    left: "left",
    soldOut: false,
    idNum: 3,
  },
  {
    tag: "Mahogany Special Edition",
    pledge: "Pledge $200 or more",
    text: " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    figure: 0,
    left: "left",
    soldOut: true,
    idNum: 4,
  },
];

function SelectModal({ open, setOpen }) {
  const [selected, setSelected] = useState(null);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    open && (
      <motion.div
        initial={{ left: "-100vw" }}
        animate={{ left: "0" }}
        transition={{ duration: ".7" }}
        className="flex z-50 justify-center left-0 h-screen top-0 fixed w-full bg-[rgba(0,0,0,.4)]"
      >
        <motion.div
          initial={{ marginTop: "-500vh" }}
          animate={{ marginTop: "0" }}
          transition={{ duration: "1.5", ease: "easeInOut" }}
          className="flex flex-col scale-90 lg:h-screen justify-center self-center rounded-lg bg-white p-8 lg:w-3/5  z-50"
        >
          <span className="flex  lg:flex-col gap-3">
            <button
              className="self-start order-2 w-10 lg:w-0 mt-2 lg:mt-0  lg:self-end"
              onClick={toggleOpen}
            >
              <img
                src="/images/icon-close-modal.svg"
                className="w-full"
                alt="closee"
              />
            </button>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">Back this project</h2>
              <h2 className="text-gray-400 mb-2">
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </h2>
            </div>
          </span>

          <div className="flex flex-col gap-4 h-4/5 overflow-auto max-h-96">
            {inform.map((element) => {
              return (
                <React.Fragment key={element.idNum}>
                  <Comps
                    tag={element.tag}
                    pledge={element.pledge}
                    left={element.left}
                    figure={element.figure}
                    text={element.text}
                    ids={element.idNum}
                    isSelected={(() => {
                      if (selected === element.idNum) return true;
                      return false;
                    })()}
                    setSelected={setSelected}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    )
  );
}

export default SelectModal;
