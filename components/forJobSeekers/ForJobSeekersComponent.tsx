import assetConstants from "@/utils/assetConstants";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";

const ForJobSeekersComponent = () => {
  return (
    <div className="min-h-screen">
      <section className="h-[110vh] gradient-primary relative flex justify-center  items-center lg:flex-nowrap flex-wrap">
        <div>
          <div className="absolute inset-0 opacity-20 left-0 top-0">
            <div className="h-full">
              <Image
                src={assetConstants.banner3}
                alt="hero"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,140C240,168,480,196,720,196C960,196,1200,168,1440,140L1440,280L0,280Z"
              ></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white h-1"></div>
        </div>
        <div className="h-full lg:w-1/3 w-full flex flex-col justify-center items-start gap-6 lg:mx-32 mx-0 lg:pr-0 pr-6">
          <span className="text-white lg:text-7xl text-4xl font-bold">Explore Roles</span>
          <span className="text-white lg:text-7xl text-4xl ">on Anantla</span>
          <div>
            <span className="text-white lg:text-lg text-base">
              Enjoy the stability of a traditional job with the flexibility to
              live and work from anywhere. 
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-white lg:text-xl text-lg font-bold mr-4">
              GET STARTED
            </span>
            <FaArrowRight color="white" size={20} />
          </div>
        </div>
        <div className="w-[35%] relative -mb-28 lg:block hidden">
          <Image
            src={assetConstants.forEmployeeBanner}
            alt="contactUs"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="w-11/12 m-auto">
        <div className="w-full lg:px-14 px-4 lg:py-16 py-4 flex flex-col justify-between items-center relative m-auto top-0 16 text-black">
          <div className="text-center">
            <span className="lg:text-5xl text-2xl font-bold lg:text-nowrap text-wrap text-black ">
              Find roles that your skill set.
            </span>
            <span className="lg:text-5xl text-2xl font-bold lg:text-nowrap text-wrap text-primary mx-2">
              match
            </span>
            <span className="lg:text-5xl text-2xl font-bold lg:text-nowrap text-wrap text-black">
              your skill set.
            </span>
          </div>
          <span className="w-full mt-10 lg:text-2xl text-lg text-center ">
            Explore the list of available job roles and choose the jobs that
            match your career ambitions and skills. With over 70+ active job
            openings Crossover matches top-tier companies with the best 1% of
            remote workers around the globe.
          </span>
        </div>
        <div className="w-full flex mt-8 gap-12 flex-wrap justify-center">
          {[
            { title: "IT JOB TRAINING", image: assetConstants.services },
            { title: "DESIGN", image: assetConstants.services },
            { title: "DEVELOPMENT", image: assetConstants.services },
            { title: "IT CONSULTANT", image: assetConstants.services },
            { title: "IT JOB TRAINING", image: assetConstants.services },
            { title: "DESIGN", image: assetConstants.services },
            { title: "DEVELOPMENT", image: assetConstants.services },
            { title: "IT CONSULTANT", image: assetConstants.services },
            { title: "IT JOB TRAINING", image: assetConstants.services },
            { title: "DESIGN", image: assetConstants.services },
            { title: "DEVELOPMENT", image: assetConstants.services },
            { title: "IT CONSULTANT", image: assetConstants.services },
          ].map((feature, index) => (
            <div
              key={index}
              className="lg:w-[22%] md:w-[48%] w-full rounded-xl"
            >
              <div className="rounded-xl border border-white py-4 px-4 h-full flex items-end flex-col justify-between shadow-md">
                <div className="rounded-lg mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="block">
                  <h3 className="text-xl font-bold text-primary">
                    {feature.title}
                  </h3>
                  <div className="mt-4">
                    <p className="text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center mt-4">
                  <span>LEARN MORE</span>
                  <button
                    type="button"
                    title="learn"
                    className="px-4 py-2 rounded-md "
                  >
                    <BsArrowRightShort size={28} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ForJobSeekersComponent;
