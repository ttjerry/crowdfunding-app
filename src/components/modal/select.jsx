import React from "react";
import { useState } from "react";
import Comps from "./selectComponent";

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

function SelectModal() {
  return (
    <div className="hidden justify-center left-0 h-screen top-0 fixed w-full bg-[rgba(0,0,0,.4)]">
      <div className="flex flex-col scale-90 h-screen justify-center self-center rounded-lg bg-white p-8 w-3/5  z-50">
        <span className="flex flex-col gap-3">
          <button className="self-end">
            <img src="/images/icon-close-modal.svg" alt="closee" />
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
              <React.Fragment>
                <Comps tag={element.tag} pledge={element.pledge} left={element.left} figure={element.figure} text={element.text} ids={element.idNum} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SelectModal;
