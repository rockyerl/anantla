import assetConstants from "@/utils/assetConstants";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import { useRouter } from "next/router";
import ContactUsModal from "../_shared/common/contactUsModal";

const HomeComponent = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const { push } = useRouter();

  return (
    <div className="min-h-screen w-full">
      <ContactUsModal />
      <section className="lg:h-[110vh] h-[100vh] gradient-primary relative">
        <div>
          <div className="absolute inset-0 opacity-20 left-0 top-0">
            <div className="h-full">
              <Image
                src={assetConstants.banner}
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
        <div className="h-full lg:w-1/3 w-full flex flex-col justify-center items-start gap-6 lg:mx-56 mx-4 lg:pr-0 pr-6 relative z-10">
          <div className="flex flex-col">
            <span className="text-white lg:text-7xl text-4xl font-bold mr-2">
              Elevate
            </span>
            <span className="text-white lg:text-7xl text-4xl ">
              your Business
            </span>
          </div>
          <div>
            <span className="text-white lg:text-lg text-base font-bold mr-2">
              In today’s fast-paced world, why settle for less?
            </span>
            <span className="text-white lg:text-lg text-base">
              We deliver top-tier software development and manpower solutions
              tailored to your needs-without breaking the bank. Whether you’re
              building a cutting-edge website or app, or need the perfect
              candidate to drive your project forward, we’ve got you covered.
            </span>
          </div>
          <div
            className="flex justify-center items-center text-white hover:text-yellow-500 cursor-pointer"
            onClick={() => push("/contact-us", undefined, { shallow: true })}
          >
            <span
              className=" lg:text-xl text-base font-bold mr-4 "
              style={{
                letterSpacing: ".2em",
              }}
            >
              READY TO BE IMPRESSED ?
            </span>
            <FaArrowRight size={20} className="lg:w-[20px] w-[10px]" />
          </div>
        </div>
      </section>
      <section className=" lg:px-14 px-4 py-4 ">
        <div className="flex flex-col gap-4  justify-center items-center text-center">
          <div>
            <span className="lg:text-5xl text-3xl font-semibold text-nowrap text-black mr-2">
              Our
            </span>
            <span className="lg:text-5xl text-3xl font-semibold text-nowrap text-primary">
              Services
            </span>
          </div>
          <span className="lg:w-1/2 w-full text-lg">
            At Anantla Tech Ventures, we empower you with IT training, tailored
            software solutions, and consulting to unlock your full potential.
          </span>
        </div>
        <div className="w-full flex mt-8 gap-12 flex-wrap justify-center">
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
          ].map((feature, index) => (
            <div
              key={index}
              className="lg:w-[22%] md:w-[45%] w-full rounded-xl"
            >
              <div className="rounded-xl border border-white py-4 px-4 h-full flex items-end flex-col justify-between shadow-md">
                <div className="rounded-lg mb-4 ">
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
                    <p className="text-sm mt-2">{feature.desc}</p>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center mt-4 text-gray-300 cursor-pointer ">
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
      <section className="lg:px-14 px-4 py-4 my-16 relative md:h-[90rem] lg:h-[100rem] xl:h-[90rem] h-[unset]">
        <div>
          <div className="absolute inset-0 opacity-40 left-0 top-0">
            <div className="h-full">
              <Image
                src={assetConstants.news}
                alt="hero"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>
          <div className="absolute inset-0 opacity-70 left-0 top-0">
            <div className="h-full gradient-primary"></div>
          </div>
          <div className="absolute top-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,140C240,112,480,84,720,84C960,84,1200,112,1440,140L1440,0L0,0Z"
              ></path>
            </svg>
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
        <div className="lg:w-4/5 w-full gradient-primary-reverse lg:px-14 px-4 py-12 flex gap-12 lg:flex-nowrap flex-wrap relative m-auto rounded-3xl top-0">
          <div className="absolute inset-0 opacity-20 left-0 top-0">
            <div className="h-full">
              <Image
                src={assetConstants.bannerChoose}
                alt="hero"
                className="w-full h-full object-cover rounded-3xl"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center lg:w-1/3 w-full">
            <span className="lg:text-4xl text-3xl font-bold text-nowrap text-white">
              Why Choose Us?
            </span>
            <span className="lg:text-xl text-base text-white">
              We provide IT training, software development, and technology
              consulting to help you reach your maximum potential.
            </span>
          </div>
          <div className="flex flex-col lg:w-2/3 w-full gap-8 lg:text-left justify-center text-center">
            <div className="flex w-full lg:justify-around justify-between">
              <div className="flex flex-col">
                <p className="text-white">Happy Client</p>
                <motion.p
                  className="text-white lg:text-5xl text-3xl font-bold mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <CountUp
                    end={90}
                    duration={2}
                    suffix="%"
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </motion.p>
              </div>
              <div className="flex flex-col">
                <p className="text-white">Project Done</p>
                <motion.p
                  className="text-white lg:text-5xl text-3xl font-bold mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <CountUp
                    end={1000}
                    duration={2}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-4/5 w-full flex bg-black lg:px-14 px-4 lg:py-16 py-4 flex-wrap justify-between relative gradient-secondary m-auto rounded-3xl top-0 mt-32">
          <motion.div
            className="lg:w-1/2 w-full relative lg:h-[unset] md:h-96 h-72"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={assetConstants.aboutUs}
              alt="Earth"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full rounded-2xl"
            />
          </motion.div>
          <div className="lg:w-[48%] w-full text-white flex flex-col justify-center mt-2">
            <div
              className="text-xl mb-1"
              style={{
                letterSpacing: ".2em",
              }}
            >
              ABOUT US
            </div>
            <div className="mt-2">
              <h2 className="lg:text-4xl text-3xl font-bold mb-4">
                Tailored software solutions that meet your{" "}
                <span className="text-[#87FBBD]">unique business</span> needs
              </h2>
              <p className=" mb-4">
                Anantla is a forward-thinking technology solutions provider
                dedicated to helping businesses navigate the complexities of the
                digital age. With a focus on innovation, reliability, and
                customer-centricity, we offer a comprehensive suite of IT
                services designed to drive growth, enhance efficiency, and
                transform operations.
              </p>
            </div>
            <div>
              <motion.button
                className="relative z-10  btn-gradient-primary justify-center w-full text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-primary-dark transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() =>
                  push("/contact-us", undefined, { shallow: true })
                }
              >
                Learn More
                <FaArrowRight color="white" size={12} />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="lg:w-4/5 w-full lg:px-14 px-4 lg:py-24 py-4 flex flex-col justify-between items-center relative m-auto top-0 mt-12">
          <div className="w-full flex justify-between text-white">
            <span
              className="lg:text-3xl text-xl  text-nowrap"
              style={{
                letterSpacing: ".1em",
              }}
            >
              NEWS
            </span>
          </div>
          <span className="w-full mt-10 lg:text-4xl text-xl  lg:text-left text-center text-white">
            At Anantla Tech Ventures, we empower you with IT training, tailored
            software solutions, and consulting to unlock your full potential.
          </span>
        </div>
      </section>
      <section className="lg:w-3/4 w-[95%] flex bg-black lg:px-14 px-4 lg:py-16 py-4 flex-wrap justify-between relative gradient-secondary-reverse m-auto rounded-3xl top-0 mt-24">
        <div className="lg:w-[48%] w-full text-white flex flex-col justify-center ">
          <div
            className="text-xl mb-1"
            style={{
              letterSpacing: ".1em",
            }}
          >
            CAREER
          </div>
          <div className="mt-2">
            <h2 className="lg:text-4xl text-3xl font-bold mb-4">
              Expect a dynamic work environment and
              <span className="text-[#87FBBD] mx-2">
                unlimited growth potential.
              </span>
            </h2>
            <p className=" mb-4">
              Access to continuous learning and development programs to enhance
              your skills and advance your career. Enjoy a comprehensive
              benefits package that includes health insurance, retirement plans,
              and more.
            </p>
          </div>
          <div>
            <motion.button
              className="relative z-10  btn-gradient-primary justify-center w-full text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-primary-dark transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() =>
                document !== null &&
                document.getElementById("join_us_modal")?.showModal()
              }
            >
              Join Us
              <FaArrowRight color="white" size={12} />
            </motion.button>
          </div>
        </div>

        <motion.div
          className="lg:w-1/2 w-full relative lg:h-[unset] md:h-96 h-72 mt-4"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={assetConstants.aboutUs}
            alt="Earth"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full rounded-2xl"
          />
        </motion.div>
      </section>
      <section className="w-full">
        <div className="lg:w-4/5 w-full lg:px-14 px-4  flex flex-col justify-between items-center relative m-auto top-0 mt-28 text-black">
          <div className="w-full flex justify-between">
            <span
              className="lg:text-3xl text-xl  text-nowrap"
              style={{
                letterSpacing: ".1em",
              }}
            >
              REVIEW
            </span>
          </div>
          <span className="w-full mt-10 lg:text-4xl text-xl text-left ">
            Meet some of the 5,000+ rockstars who have found a rewarding remote
            career on Crossover.
          </span>
        </div>
        <div className="carousel w-full py-4 lg:px-0 px-8" ref={carouselRef}>
          {[
            {
              title: "Michael Chen",
              desc: "I've found my dream job here. The flexibility of remote work combined with challenging projects has boosted my career growth exponentially.",
              rating: 5,
              job: "Senior Software Engineer",
              image: assetConstants.review,
            },
            {
              title: "Emily Johnson",
              desc: "The collaborative environment and cutting-edge technologies we work with have made this the most rewarding job I've ever had.",
              rating: 4,
              job: "Full Stack Developer",
              image: assetConstants.review1,
            },
            {
              title: "Sophia Rodriguez",
              desc: "I appreciate the work-life balance and the opportunity to work with a diverse, global team. It's been an enriching experience.",
              rating: 3,
              job: "DevOps Engineer",
              image: assetConstants.review2,
            },
            {
              title: "Alex Patel",
              desc: "The continuous learning opportunities and mentorship programs have significantly accelerated my professional development.",
              rating: 5,
              job: "Data Scientist",
              image: assetConstants.review3,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="carousel-item lg:w-[50%] md:w-[48%] w-full rounded-xl mx-4"
            >
              <div className="rounded-xl border bg-white border-white py-4 px-4 h-full flex lg:flex-row flex-col gap-6 items-end justify-between shadow-md">
                <div className="rounded-lg mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={180}
                    className="lg:h-[180px] h-[unset] object-contain"
                  />
                </div>
                <div className="flex flex-col justify-start items-start h-full">
                  <div className="flex flex-wrap gap-4 mt-2">
                    <h3 className="text-xl font-bold text-black">
                      {feature.title}
                    </h3>
                    <div className="">
                      <span className="inline-block bg-[#F5F5F5] rounded-full px-3 py-1 text-sm font-semibold text-[#757575] mr-2 mb-2">
                        {feature.job}
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-6 h-6 ${
                          star <= feature.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        } fill-current`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <div className="mt-2">
                    <p className="text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative bg-primary lg:w-2/5 w-11/12 lg:px-10 px-4 lg:py-8 py-4 flex m-auto rounded-2xl my-28 justify-between items-center">
        <div className="absolute inset-0 opacity-20 left-0 top-0">
          <div className="h-full">
            <Image
              src={assetConstants.beOur}
              alt="hero"
              className="w-full h-full object-cover rounded-2xl"
              fill
            />
          </div>
        </div>
        <span className="text-white lg:text-3xl text-xl font-bold relative">
          Be Part of Our Team!
        </span>
        <button
          className="relative z-10 lg:scale-100 scale-75 bg-black justify-center text-white lg:px-8 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-primary-dark transition-colors duration-300"
          onClick={() =>
            document !== null &&
            document.getElementById("join_us_modal")?.showModal()
          }
        >
          <span className="text-nowrap">Join Us</span>
          <FaArrowRight color="white" size={12} />
        </button>
      </section>
    </div>
  );
};

export default HomeComponent;
