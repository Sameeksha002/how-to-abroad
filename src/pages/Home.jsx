import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { tools } from "../data/tools";
import ToolsCard from "../components/ToolsCard";

const Home = () => {
  return (
    <div className="">
      <header className="bg-blue-950 text-white font-medium py-2 flex justify-between items-center pl-4 text-lg">
        <h1>Welcome to our platform!</h1>
        <nav className="flex space-x-2 mr-2">
          <p className="text-white hover:underline mx-2">
            About
          </p>
          <p className="text-white hover:underline mx-2">
            Contact
          </p>
        </nav>
      </header>
      <section className="mt-8">
        <div className="text-center" >
          <h2 className="text-3xl font-semibold mb-4">Who are we?</h2>
          <p className="text-lg text-gray-700 mb-6">
            How To Abroad (HTA) is a startup, founded by two students from the University of Bayreuth. The main aim of this startup is to help people who want to Study Abroad and at present, this startup is focusing on the Education sector in Germany but soon it will look into other countries as well.
          </p>
        </div>
      </section>


      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Popular on HowToAbroad: Study in Germany
        </h2>
        <Swiper
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 15 },
            700: { slidesPerView: 2, spaceBetween: 15 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <ToolsCard tool={tool} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <footer className="bg-blue-950 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 How To Abroad Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
