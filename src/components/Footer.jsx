import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed pt-2.5 pb-4 w-full flex justify-evenly left-0 bottom-0 bg-white">
      <Link to="/" className="text-center">
        <i className="fa-solid fa-house text-gray-300 flex flex-col items-center justify-between h-full text-xs font-extrabold hover:text-[#692BEC]">
          صفحه اصلی
        </i>
      </Link>
      <Link to="/" className="text-center ">
        <i className="fa-solid fa-stethoscope text-[#692BEC] flex flex-col items-center justify-between h-full text-xs font-extrabold hover:text-[#692BEC]">
          پزشکان
        </i>
      </Link>
      <Link to="/" className="text-center">
        <i className="fa-regular fa-comments text-gray-300 flex flex-col items-center justify-between h-full text-xs mb-2 font-extrabold hover:text-[#692BEC]">
          فالو آپ
        </i>
      </Link>
      <Link to="/" className="text-center">
        <i className="fa-regular fa-user text-gray-300 flex flex-col items-center justify-between h-full text-xs font-extrabold hover:text-[#692BEC]">
          پروفایل
        </i>
      </Link>
    </div>
  );
};

export default Footer;
