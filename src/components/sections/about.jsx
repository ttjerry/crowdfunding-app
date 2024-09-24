import { motion } from "framer-motion";
import { useState } from "react";
import Complete from "../modal/modalSuccess";
import SelectModal from "../modal/ModalSelect";
// import Comps from "../modal/selectComponent";

const info = [
  {
    tag: "Bamboo Stand",
    pledge: "Pledge $25 or more",
    text: "You get an ergonomic stand made of natural bamboo. Youve helped us launch our promotional campaign and youll be added to a special Backer member list.",
    figure: 101,
    soldOut: false,
    id: 2,
  },
  {
    tag: "Black Edition Stand",
    pledge: "Pledge $75 or more",
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    figure: 64,
    soldOut: false,
    id: 3,
  },
  {
    tag: "Mahogany Special Edition",
    pledge: "Pledge $200 or more",
    text: " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    figure: 0,
    soldOut: true,
    id: 4,
  },
];

const someText = [
  "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work,helping you stay focused on the task at hand.",
  "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
];

function About() {
  //default state variable for modal select
  const [open, setOpen] = useState(false);
  // default state variable for modal success
  const [modal, setShowModal] = useState(false);
  // toggle state variable of modal select
  function toggleOpen() {
    setOpen(!open);
  }
  // function showMe() {
  //   setShowModal(!modal);
  // }
  return (
    <motion.div className="flex flex-col gap-6  w-[90%] lg:w-6/12 mb-10 p-6 lg:px-12 bg-white shadow-2xl rounded-xl">
      <SelectModal
        open={open}
        setOpen={setOpen}
        modal={modal}
        showModal={setShowModal}
      />
      {/* modal success */}
      <Complete
        open={open}
        setOpen={setOpen}
        modal={modal}
        showModal={setShowModal}
      />
      <section className="flex flex-col gap-8">
        <h1 className="font-bold text-[17px] lg:text-xl">About this project</h1>
        <h3 className="flex flex-col text-gray-400 gap-6 leading-6 text-[14px]">
          <span>{someText[0]}</span>
          <span>{someText[1]}</span>
        </h3>
      </section>
      {/* components */}
      <div className="flex flex-col gap-4">
        {info.map((me, index) => {
          return (
            <div
              key={index}
              className=" border-[1.5px] flex flex-col gap-6 rounded-lg p-4 lg:p-10"
            >
              <div className="flex flex-col lg:flex-row justify-between">
                <span
                  className={`font-bold ${
                    me.soldOut ? "text-gray-500" : false
                  }`}
                >
                  {me.tag}
                </span>

                <span
                  className={`text-[#3DB5AB] text-[14px] font-semibold ${
                    me.soldOut ? "text-gray-500" : false
                  }`}
                >
                  {me.pledge}
                </span>
              </div>

              <div className="text-[12px] lg:text-[13px] leading-5 lg:leading-6 text-gray-400">
                {me.text}
              </div>

              <div className="flex flex-col gap-4 lg:gap-0 items-start lg:flex-row lg:items-center justify-between">
                <span
                  className={`text-2xl lg:text-xl flex gap-1 font-bold ${
                    me.soldOut ? "text-gray-500" : false
                  }`}
                >
                  {me.figure}
                  <span className="flex text-gray-400 self-center font-light text-xs">
                    left
                  </span>
                </span>
                <button
                  className={`p-3 px-7 text-[13px] bg-[#3DB5AB] rounded-full text-white ${
                    me.soldOut ? "bg-gray-500 opacity-60" : false
                  }`}
                  disabled={me.soldOut ? "z-0 disabled" : false}
                  onClick={toggleOpen}
                >
                  {me.soldOut ? "Out of stock" : "Select Reward"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default About;
