import assetConstants from "@/utils/assetConstants";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";

const ForJobSeekersComponent = () => {
  const { push } = useRouter();

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
          <div className="absolute bottom-0 left-0 right-0 bg-white h-1"></div>
        </div>
        <div className="h-full lg:w-1/3 w-full flex flex-col justify-center items-start gap-6 lg:mx-32 mx-0 lg:pr-0 pr-6 relative">
          <span className="text-white lg:text-7xl text-4xl font-bold">
            Explore Roles
          </span>
          <span className="text-white lg:text-7xl text-4xl ">on Anantla</span>
          <div>
            <span className="text-white lg:text-lg text-base">
              Enjoy the stability of a traditional job with the flexibility to
              live and work from anywhere. 
            </span>
          </div>
          <div
            className="flex justify-center items-center text-white hover:text-yellow-500 cursor-pointer"
            onClick={() => push("/contact-us", undefined, { shallow: true })}
          >
            <span className=" lg:text-xl text-lg font-bold mr-4">
              GET STARTED
            </span>
            <FaArrowRight  size={20} />
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
        <div className="w-full flex mt-8 py-4 gap-12 flex-wrap justify-center">
          {[
            {
              title: "Technical Support",
              desc: "Get expert technical assistance for all your business needs.",
              image:
                "https://cdn.b12.io/client_media/LsnItvpe/a4b3c0f6-1724-11ef-9dc8-0242ac110002-jpg-regular_image.jpeg",
            },
            {
              title: "CTO on Demand",
              desc: "Access experienced Chief Technology Officers as per your requirement.",
              image:
                "https://cdn.b12.io/client_media/LsnItvpe/a4e539ce-1724-11ef-9dc8-0242ac110002-jpg-regular_image.jpeg",
            },
            {
              title: "Project Management on Demand",
              desc: "Efficient project management solutions tailored to your needs.",
              image:
                "https://cdn.b12.io/client_media/LsnItvpe/a4930abe-1724-11ef-9dc8-0242ac110002-jpg-regular_image.jpeg",
            },
            {
              title: "Developer on Demand",
              desc: "Get talented developers to bring your ideas to life.",
              image:
                "https://cdn.b12.io/client_media/LsnItvpe/a5c2e210-1724-11ef-9dc8-0242ac110002-jpg-regular_image.jpeg",
            },
            {
              title: "Startup Assistance",
              desc: "Guidance and support for scaling your startup to new heights.",
              image:
                "https://cdn.b12.io/client_media/LsnItvpe/a476a5ea-1724-11ef-9dc8-0242ac110002-jpg-regular_image.jpeg",
            },
            {
              title: "Software Development Training",
              desc: "Comprehensive training programs with job guarantee for aspiring developers.",
              image:
                "https://cdn.b12.io/client_media/LsnItvpe/a42e943a-1724-11ef-9dc8-0242ac110002-jpg-regular_image.jpeg",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="lg:w-[25%] md:w-[48%] w-full rounded-xl"
            >
              <div className="rounded-xl border border-white py-4 px-4 h-full flex items-end flex-col justify-between shadow-md">
                <div className="rounded-lg mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className="object-cover h-[200px]"
                  />
                </div>
                <div className="block">
                  <h3 className="text-xl font-bold text-primary">
                    {feature.title}
                  </h3>
                  <div className="mt-4">
                    <p className="text-sm mt-2">
                      {feature.desc}
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center mt-4 text-gray-300">
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
