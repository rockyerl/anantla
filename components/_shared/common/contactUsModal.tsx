import assetConstants from "@/utils/assetConstants";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactUsModal = () => {
    return (
        <dialog id="join_us_modal" className="modal">
        <section className="lg:w-3/4 w-[95%] h-[95%] flex bg-white shadow-lg lg:px-14 px-4 lg:py-16 py-4 flex-wrap justify-between m-auto rounded-3xl relative lg:overflow-hidden overflow-y-auto">
          <button
            onClick={() => document.getElementById('join_us_modal')?.close()}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.div
            className="lg:w-1/2 w-full relative lg:h-[unset] md:h-96 h-72 lg:block hidden"
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
                We're dedicated to providing you with the best support
                possible.
              </span>
              <div className="flex flex-col mt-4 gap-6 w-full">
                <div className="flex flex-col w-full gap-2">
                  <h3>Name</h3>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="lg:px-4 px-2 lg:py-3 py-2 text-neutral rounded-lg focus:outline-none border"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <h3>Email</h3>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="lg:px-4 px-2 lg:py-3 py-2 text-neutral rounded-lg focus:outline-none border"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <h3>Message</h3>
                  <textarea
                    placeholder="Enter your message"
                    className="lg:px-4 px-2 lg:py-3 py-2 text-neutral rounded-lg focus:outline-none resize-none h-32 border"
                  ></textarea>
                </div>
                <div>
                  <a
                    href="mailto:hr@anantla.com"
                    title="Contact Us"
                    className="inline-block bg-primary text-white lg:px-16 px-2 lg:py-3 py-2 rounded-lg hover:bg-gray-900 transition-colors border border-white text-center"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </dialog>
    )
}

export default ContactUsModal;