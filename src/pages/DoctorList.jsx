import { LIST } from "../assets/data";
import DoctorCard from "../components/DoctorCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DoctorList = () => {
  return (
    <div>
      <Header />
      <div className="pt-[88px] pb-[66px]">
        <h6 className="font-bold mb-3">لیست پزشکان</h6>
        <div className="">
          {LIST.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorList;
