function Top() {
  return (
    <div className="flex flex-col items-center relative -top-16 -mb-16 lg:justify-center  gap-4 bg-white w-[90%] lg:w-3/6 rounded-xl pb-10 ">
      <img
        src="/images/logo-mastercraft.svg"
        className="w-12 relative -top-6 self-center"
        alt="thisis"
      />
      <div className="flex flex-col w-5/6 lg:w-4/6 p-0 gap-2">
        <h2 className="text-center text-2xl font-bold">
          Mastercraft Bamboo Monitor Riser
        </h2>
        <h2 className="text-gray-400 lg:text-left text-center text-[14px]">
          A beautiful & hadncrafted monitor stand to reduce neck and eye strain
        </h2>
      </div>
      <span className="flex mt-4 flex-row gap-4 lg:gap-0 lg:w-full lg:px-12 justify-between">

        <button className="rounded-full bg-[#3DB5AB] text-white px-6 w-44">
          Back this project
        </button>

        <div className="flex flex-row justify-between items-center bg-gray-200 lg:pr-6 lg:w-44 rounded-full">
          <button>
            <img src="/images/icon-bookmark.svg" alt="" />
          </button>
          <h2 className="hidden lg:block">Bookmark</h2>
        </div>

      </span>
    </div>
  );
}

export default Top;
