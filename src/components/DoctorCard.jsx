import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { name, specialty, history, id } = doctor;
  return (
    <Link
      to={`/detail/${id}`}
      className="flex items-center justify-between bg-white mb-2.5 rounded-lg px-2 py-2"
    >
      <div className="flex items-center w-9/12">
        <img
          src="/images/Doctors_green.png"
          alt="doctor image"
          className="w-12 h-12 rounded-full ml-2"
        />
        <div className="overflow-hidden">
          <p className="text-sm font-bold">دکتر {name}</p>
          <p className="whitespace-nowrap overflow-hidden text-ellipsis text-sm text-gray-500 my-1">
            {specialty}
          </p>
          <p className="text-xs text-gray-400">{history} سال سابقه</p>
        </div>
      </div>
      <img src="/images/Chevron_Left.svg" alt="Left arrow" />
    </Link>
  );
};

export default DoctorCard;
