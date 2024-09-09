import assetConstants from "@/utils/assetConstants";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const { push } = useRouter();

  return (
    <footer className="flex flex-col bg-neutral pt-48 justify-between lg:px-14 px-4 py-5 text-white relative">
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,140C240,112,480,84,720,84C960,84,1200,112,1440,140L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
      <motion.div
        className="w-full flex justify-center relative lg:scale-100 scale-75"
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={assetConstants.footerLogo}
          alt="logo"
          width={274}
          height={274}
        />
      </motion.div>
      <div className="flex gap-4 my-4 py-12 flex-wrap justify-center">
        <div className="xl:w-[35%] w-full flex lg:justify-evenly justify-start gap-y-8 flex-wrap">
          <div className="flex flex-col gap-6 lg:w-[unset] w-1/2">
            <h3 className="font-bold">Services</h3>
            <ul className="space-y-4">
              <li
                className="cursor-pointer hover:text-yellow-500"
                onClick={() =>
                  push("/for-jobseekers", undefined, { shallow: true })
                }
              >
                For Jobseekers
              </li>
              <li
                className="cursor-pointer hover:text-yellow-500"
                onClick={() =>
                  push("/for-companies", undefined, { shallow: true })
                }
              >
                For Companies
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 lg:w-[unset] w-1/2">
            <h3 className="font-bold">Careers</h3>
            <ul className="space-y-4"></ul>
          </div>
        </div>
        <div className="xl:w-[35%] w-full flex flex-col gap-8">
          <h3 className="font-bold">Newletter</h3>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex mt-4 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow lg:px-4 px-2 lg:py-3 py-2 text-neutral rounded-lg focus:outline-none"
            />
            <a
              href="mailto:hr@anantla.com"
              title="subscribe"
              className="bg-neutral text-white lg:px-4 px-2 lg:py-3 py-2 rounded-lg hover:bg-gray-900 transition-colors border border-white flex items-center justify-center"
            >
              Subscribe
            </a>
          </div>
          <p>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
        <div className="xl:w-[20%] w-full flex lg:justify-evenly justify-start gap-y-8 flex-wrap">
          <div className="flex flex-col gap-6 lg:w-[unset] w-1/2">
            <h3 className="font-bold">Follow Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-2 items-center">
                <FaFacebook />
                <span>Facebook</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaInstagram />
                <span>Instagram</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaXTwitter />
                <span>X</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaLinkedin />
                <span>LinkedIn</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaYoutube />
                <span>Youtube</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b-2 mb-4" />
      <div className="flex justify-between items-center my-4 flex-wrap gap-y-4 lg:w-4/5 w-full m-auto">
        <div className="text-sm ">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
        <ul className="flex space-x-4 text-sm ">
          <li>
            <span className="underline">Privacy Policy</span>
          </li>
          <li>
            <span className="underline">Terms of Service</span>
          </li>
        </ul>
        <div className="w-1/6"></div>
      </div>
    </footer>
  );
};

export default Footer;
