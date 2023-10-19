import React from "react";

const Header = () => {
  return (
    <div className="fixed pt-5 pb-4 px-2 w-full left-0 top-0 bg-white flex justify-between">
      <div className="relative ml-3 w-8/12">
        <input
          type="text"
          className="bg-gray-200 text-gray-400 placeholder-gray-400 py-4 pl-3 pr-8 rounded-md h-10 text-sm w-full"
          placeholder="جستوجوی نام، کد پذیرش و ...|"
        />
        <img
          src="/images/Search_Magnifying_Glass.svg"
          alt="Search"
          width={16}
          height={16}
          className="absolute top-3 right-2"
        />
      </div>
      <button className="bg-[#692BEC] rounded-md h-10 w-3/12 flex justify-between items-center px-3">
        <span className="text-white font-bold text-sm">فیلتر</span>
        <img src="/images/Slider_01.svg" alt="Filter" />
      </button>
    </div>
  );
};

export default Header;
