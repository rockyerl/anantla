import assetConstants from "@/utils/assetConstants";
import Image from "next/image";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import useStoreSelf from "@/stores";
import { useState } from "react";

const ContactUsComponent = () => {
  const { sendEmails, loading } = useStoreSelf((state) => state.mailer);
  const { setResponse } = useStoreSelf((state) => state.response);
  const { code, message } = useStoreSelf((state) => state.response);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendEmails({
      from: {
        email: "admin@anantla.com",
        name: "Website Contact Anantla",
      },
      to: [
        {
          email: "hr@anantla.com",
          name: "HR Anantla",
        },
      ],
      subject: `Website Contact Anantla from ${formData.name}`,
      html_part: `<html>
        <head></head>
        <body>
              <h2>From: ${formData.name}</h2>
              <p>Email: ${formData.email}</p>
              <p>Message:</p>
              <p>${formData.message}</p>
        </body>
        </html>`,
    })
      .then((res) => {
        console.log(res?.data);
        setResponse(200, res?.data?.message);
      })
      .catch((err) => {
        console.log(err?.data);
        setResponse(500, 'Failed to send email please try again later');
      });
  };

  return (
    <div className="min-h-screen">
      
      <section className="h-[110vh] gradient-primary relative">
        <div>
          <div className="absolute inset-0 opacity-20 left-0 top-0">
            <div className="h-full">
              <Image
                src={assetConstants.bannerChoose}
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
        <div className="h-full lg:w-3/4 w-full m-auto flex flex-col justify-center items-start gap-6 lg:pr-0 pr-6 lg:pb-36 pb-0">
          <div>
            <span className="text-white lg:text-7xl text-4xl font-bold">
              Get in Touch{" "}
            </span>
            <span className="text-white lg:text-7xl text-4xl ">with Us!</span>
          </div>
          <div>
            <span className="text-white lg:text-xl text-lg">
              We`d love to hear from you! Whether you have a question, feedback,
              or need assistance, our team is here to help.
            </span>
          </div>
        </div>
      </section>
      <section className="lg:w-3/4 w-[95%] flex bg-white shadow-lg lg:px-14 px-4 lg:py-16 py-4 flex-wrap justify-between relative m-auto rounded-3xl top-0 lg:-mt-[22rem] mt-0">
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
        <div className="lg:w-[48%] w-full flex flex-col justify-center ">
          <div className="mt-2">
            <h2 className="lg:text-4xl text-3xl font-bold mb-4">
              Contact Us <span className="text-primary">Anytime!</span>
            </h2>
            <span className="text-lg">
              We`re dedicated to providing you with the best support possible.
            </span>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-4 gap-6 w-full"
            >
              <div className="flex flex-col w-full gap-2">
                <h3>Name</h3>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="lg:px-4 px-2 lg:py-3 py-2 text-neutral rounded-lg focus:outline-none border"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <h3>Email</h3>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="lg:px-4 px-2 lg:py-3 py-2 text-neutral rounded-lg focus:outline-none border"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <h3>Message</h3>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  className="lg:px-4 px-2 lg:py-3 py-2 text-neutral rounded-lg focus:outline-none resize-none h-32 border"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block bg-primary text-white lg:px-16 px-2 lg:py-3 py-2 rounded-lg hover:bg-gray-900 transition-colors border border-white text-center"
                >
                  {loading ? "Sending..." : "Contact Us"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="lg:w-3/4 w-full m-auto mt-12">
        <div className="w-full lg:px-14 px-4 lg:py-16 py-4 flex flex-col justify-between items-center relative m-auto top-0 16 text-black">
          <div>
            <span className="lg:text-4xl text-2xl font-bold text-nowrap text-black ">
              Stay Connected
            </span>
          </div>
          <span className="w-full mt-10 lg:text-xl text-lg text-center ">
            Stay connected and join our vibrant community! Follow us on social
            media to keep up with the latest updates, news, and exclusive
            content.
          </span>
          <ul className="flex gap-8 flex-wrap mt-12">
            <li className="flex gap-2 items-center lg:w-[30%] w-[45%]">
              <FaFacebook size={28} />
              <span className="text-xl">Facebook</span>
            </li>
            <li className="flex gap-2 items-center lg:w-[30%] w-[45%]">
              <FaInstagram size={28} />
              <span className="text-xl">Instagram</span>
            </li>
            <li className="flex gap-2 items-center lg:w-[30%] w-[45%]">
              <FaXTwitter size={28} />
              <span className="text-xl">X</span>
            </li>
            <li className="flex gap-2 items-center lg:w-[30%] w-[45%]">
              <FaLinkedin size={28} />
              <span className="text-xl">LinkedIn</span>
            </li>
            <li className="flex gap-2 items-center lg:w-[30%] w-[45%]">
              <FaYoutube size={28} />
              <span className="text-xl">Youtube</span>
            </li>
            <li className="flex gap-2 items-center lg:w-[30%] w-[45%]">
              <FaLinkedin size={28} />
              <span className="text-xl">Linkedin</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="lg:w-3/4 w-[90%] flex bg-black lg:px-14 px-4 lg:py-16 py-4 flex-wrap justify-between relative gradient-secondary-reverse m-auto rounded-3xl top-0 mt-16">
        <div className="lg:w-[48%] w-full text-white flex flex-col justify-center ">
          <div className="lg:text-xl text-lg  font-semibold mb-1">
            NEWSLETTER
          </div>
          <div className="mt-2">
            <h2 className="lg:text-4xl text-2xl font-bold mb-4">
              Join our newsletter to stay up to date on features and releases.
            </h2>
            <div className="flex mt-4 lg:gap-4 gap-2 flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow lg:px-4 px-2 lg:py-3 py-2 text-neutral rounded-lg focus:outline-none"
              />
              <button
                type="button"
                title="subscribe"
                className="bg-transparent text-white lg:px-4 px-2 lg:py-3 py-2 rounded-lg hover:bg-gray-900 transition-colors border border-white"
              >
                Subscribe
              </button>
            </div>
            <p className=" mt-4">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
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

export default ContactUsComponent;
