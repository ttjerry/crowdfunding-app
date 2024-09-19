import { useState } from "react";
import { easeInOut, motion } from "framer-motion";

function Nav() {
  const [isOpen, setisOpen] = useState(false);

  function toggleMenu() {
    setisOpen(!isOpen);
  }
  return (
    <motion.div
      initial={{ top: "-300px" }}
      animate={{ top: "0" }}
      transition={{
        duration: 0.8,
      }}
      className="overflow-x-hidden lg:h-[40vh] h-[40vh] relative w-full bg-[url('/images/image-hero-mobile.jpg')] lg:bg-[url('/images/image-hero-desktop.jpg')]  bg-contain lg:bg-cover bg-no-repeat"
    >
      <motion.nav
        className="flex flex-row items-center justify-between p-10 lg:px-24 z-20
      "
      >
        <div>
          <motion.img
            initial={{ marginLeft: "-100px" }}
            animate={{ marginLeft: "0px" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: .2
            }}
            src="/images/logo.svg"
            alt="image"
          />
        </div>
        <ul>
          {/* mobile menu contents */}
          <motion.li
            initial={{ left: "200px" }}
            animate={{ left: "0px" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: .2
            }}
            className={`flex opacity-0 lg:opacity-100 lg:relative absolute lg:top-0 -top-80
             left-[10%] lg:bg-inherit bg-white rounded-lg lg:rounded-none lg:flex-row flex-col gap-3 lg:gap-12 lg:w-fit w-5/6 p-10 lg:p-0 shadow-2xl ${
               isOpen ? "delay-200 opacity-100 flex top-24" : false
             }`}
          >
            <a
              href="#"
              className="lg:text-white lg:border-b-0 pb-2 lg:pb-0 border-b-2"
            >
              About
            </a>
            <a
              href="#"
              className="lg:text-white lg:border-b-0 pb-2 lg:pb-0 border-b-2"
            >
              Discover
            </a>
            <a
              href="#"
              className="lg:text-white lg:border-b-0 pb-2 lg:pb-0 border-b-2"
            >
              Get Started
            </a>
          </motion.li>
          {/* hamburger button */}
          <button className="flex lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <img src="/images/icon-close-menu.svg" alt="ger" />
            ) : (
              <img src="/images/icon-hamburger.svg" alt="gerri" />
            )}
          </button>
        </ul>
      </motion.nav>
    </motion.div>
  );
}

export default Nav;
