import assetConstants from "@/utils/assetConstants";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const ForCompanyComponent = () => {
  const { push } = useRouter();

  return (
    <div className="min-h-screen">
      <section className="h-[110vh] gradient-primary relative flex justify-center  items-center lg:flex-nowrap flex-wrap">
        <div>
          <div className="absolute inset-0 opacity-20 left-0 top-0">
            <div className="h-full">
              <Image
                src={assetConstants.banner2}
                alt="hero"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-white h-1"></div>
        </div>
        <div className="h-full lg:w-1/3 w-full flex flex-col justify-center items-start gap-6 lg:mx-32 mx-4 lg:pr-0 pr-6">
          <span className="text-white lg:text-7xl text-4xl font-bold">
            Hire smarter,
          </span>
          <span className="text-white lg:text-7xl text-4xl ">not harder.</span>
          <div>
            <span className="text-white lg:text-lg text-base">
              The most important task of a leader is recruiting the right team,
              but most recruiters will tell you to increase your budget or lower
              your standards. We invented a better way.
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
            src={assetConstants.bannerCompany}
            alt="contactUs"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="w-4/5 flex m-auto my-16 justify-center items-center flex-col gap-8">
        <span className="lg:text-4xl text-2xl text-primary">
          Companies We Work with
        </span>
        <div className="flex gap-16 overflow-x-auto">
          <Image
            src={assetConstants.webFlow}
            alt="review"
            width={200}
            height={60}
            className="mt-2 w-[120px] object-cover"
          />
          <Image
            src={assetConstants.relume}
            alt="review"
            width={200}
            height={60}
            className="mt-2 w-[120px] object-cover"
          />
          <Image
            src={assetConstants.webFlow}
            alt="review"
            width={200}
            height={60}
            className="mt-2 w-[120px] object-cover"
          />
          <Image
            src={assetConstants.relume}
            alt="review"
            width={200}
            height={60}
            className="mt-2 w-[120px] object-cover"
          />
        </div>
      </section>
      <section className="lg:w-4/5 w-full m-auto">
        <div className="w-full lg:px-14 px-4 lg:py-16 py-4 flex flex-col justify-between items-center relative m-auto top-0 mt-16 text-black">
          <span className="w-full mt-10 lg:text-4xl text-xl text-left ">
            Meet some of the 5,000+ rockstars who have found a rewarding remote
            career on Crossover.
          </span>
        </div>
        <div className="w-full py-4 gap-4 flex flex-wrap justify-center">
          {[
            {
              title: "John Doe",
              image: assetConstants.review,
            },
            {
              title: "John Doe",
              image: assetConstants.review1,
            },
            {
              title: "John Doe",
              image: assetConstants.review2,
            },
            {
              title: "John Doe",
              image: assetConstants.review3,
            },
            {
              title: "John Doe",
              image: assetConstants.review4,
            },
            {
              title: "John Doe",
              image: assetConstants.review5,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="carousel-item lg:w-[40%] md:w-[48%] w-full rounded-xl lg:mx-4 mx-0"
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
                        Automotive
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <div className="mt-2">
                    <p className="text-sm">
                      Working here has been an incredible experience. The team
                      is supportive, the projects are challenging, and there is
                      always room for growth.
                    </p>
                  </div>

                  <Image
                    src={assetConstants.webFlow}
                    alt="review"
                    width={130}
                    height={60}
                    className="mt-2 w-[130px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lg:w-3/4 w-[95%] flex bg-black lg:px-14 px-4 lg:py-16 py-4 flex-wrap justify-between relative gradient-secondary-reverse m-auto rounded-3xl top-0 mt-16">
        <div className="lg:w-[48%] w-full text-white flex flex-col justify-center ">
          <div className="lg:text-xl text-lg font-semibold mb-1">CAREER</div>
          <div className="mt-2">
            <h2 className="lg:text-4xl text-2xl font-bold mb-4">
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
              onClick={() => push("/contact-us", undefined, { shallow: true })}
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
    </div>
  );
};

export default ForCompanyComponent;
