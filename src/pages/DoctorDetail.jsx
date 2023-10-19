import { Link, useParams } from "react-router-dom";
import { LIST } from "../assets/data";
import { useState } from "react";

const DoctorDetail = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState({
    isAboutOpen: false,
    isEducationOpen: false,
    isExperienceOpen: false,
  });

  const doctor = LIST.find((item) => item.id.toString() === id);
  const {
    name,
    about,
    code,
    education,
    experience,
    history,
    rate,
    specialty,
    work,
  } = doctor;
  return (
    <>
      <div className="fixed flex justify-between items-center pt-5 pb-4 w-full left-0 top-0 bg-white px-3">
        <span className="text-sm font-semibold">پروفایل پزشک</span>
        <Link to="/">
          <img src="/images/Chevron_Left.svg" alt="left arrow" />
        </Link>
      </div>
      <div className="pt-[76px] pb-3">
        <div className="flex mb-4">
          <img
            src="/images/Doctors_green.png"
            alt="doctor image"
            className="w-14 h-14 ml-4 rounded-full"
          />
          <div className="flex flex-col justify-evenly">
            <p className="font-semibold text-sm ">{name}</p>
            <p className="text-xs text-gray-600">{specialty}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="bg-white w-1/3 flex flex-col items-center rounded-lg ml-3">
            <div className="bg-[#E9FFF4] w-9 h-12 rounded-b-lg flex items-center justify-center">
              <img
                src="/images/Stethoscope.png"
                alt="Stethoscope"
                width={20}
                height={20}
                className="mx-auto"
              />
            </div>
            <div className="flex flex-col items-center text-sm my-2">
              <p className="font-bold">{history} سال</p>
              <p className="text-gray-400">سابقه طبابت</p>
            </div>
          </span>
          <span className="bg-white w-1/3 flex flex-col items-center rounded-lg ml-3">
            <div className="bg-[#FFF1F6] w-9 h-12 rounded-b-lg flex items-center justify-center">
              <img
                src="/images/text.png"
                alt="text"
                width={20}
                height={20}
                className="mx-auto"
              />
            </div>
            <div className="flex flex-col items-center text-sm my-2">
              <p className="font-bold">{code}</p>
              <p className="text-gray-400">شماره نظام</p>
            </div>
          </span>
          <span className="bg-white w-1/3 flex flex-col items-center rounded-lg">
            <div className="bg-[#FFFADC] w-9 h-12 rounded-b-lg flex items-center justify-center">
              <img
                src="/images/star.png"
                alt="Stethoscope"
                width={24}
                height={24}
                className="mx-auto"
              />
            </div>
            <div className="flex flex-col items-center text-sm my-2">
              <p className="font-bold">{rate}</p>
              <p className="text-gray-400">رای مراجعین</p>
            </div>
          </span>
        </div>
        <div className="my-5">
          <div className="bg-white rounded-lg py-1.5 px-3 mb-3">
            <div className="flex justify-between">
              <span>درباره پزشک</span>
              <img
                src="/images/Chevron_Left.svg"
                alt="left arrow"
                className={`cursor-pointer ${
                  isOpen.isAboutOpen && "rotate-[-90deg]"
                }
              }`}
                onClick={() =>
                  setIsOpen((prevState) => ({
                    ...prevState,
                    isAboutOpen: !isOpen.isAboutOpen,
                  }))
                }
              />
            </div>
            {isOpen.isAboutOpen && <p className="text-xs">{about}</p>}
          </div>

          <div className="bg-white rounded-lg py-1.5 px-3 mb-3">
            <div className="flex justify-between">
              <span>تحصیلات</span>
              <img
                src="/images/Chevron_Left.svg"
                alt="left arrow"
                className={`cursor-pointer ${
                  isOpen.isEducationOpen && "rotate-[-90deg]"
                }
              }`}
                onClick={() =>
                  setIsOpen((prevState) => ({
                    ...prevState,
                    isEducationOpen: !isOpen.isEducationOpen,
                  }))
                }
              />
            </div>
            {isOpen.isEducationOpen && <p className="text-xs">{education}</p>}
          </div>

          <div className="bg-white rounded-lg py-1.5 px-3">
            <div className="flex justify-between">
              <span>تجربیات و دستاوردها</span>
              <img
                src="/images/Chevron_Left.svg"
                alt="left arrow"
                className={`cursor-pointer ${
                  isOpen.isExperienceOpen && "rotate-[-90deg]"
                }
              }`}
                onClick={() =>
                  setIsOpen((prevState) => ({
                    ...prevState,
                    isExperienceOpen: !isOpen.isExperienceOpen,
                  }))
                }
              />
            </div>
            {isOpen.isExperienceOpen && <p className="text-xs">{experience}</p>}
          </div>
        </div>
        <div className="mb-10">
          <div className="font-bold text-sm mb-4">ساعات کاری و جلسات پزشک</div>
          <div className="flex flex-wrap justify-between">
            {work.map(({ day, time }, index) => (
              <div
                key={index}
                className={`${
                  index === 1 || index === 4 ? "mx-2" : "px-0"
                } w-[30%] border-2 border-[#692BEC] bg-white rounded-lg py-4 mb-4 text-center font-bold text-sm`}
              >
                <p className="mb-1 text-[#692BEC]">{day}</p>
                <p>{time}</p>
              </div>
            ))}
          </div>
        </div>

        <button className=" bg-gray-300 text-white font-bold rounded-lg w-full py-3 hover:bg-gray-500 transition duration-500 ease-in-out ">
          دریافت و ثبت نوبت
        </button>
      </div>
    </>
  );
};

export default DoctorDetail;
