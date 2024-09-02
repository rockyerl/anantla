import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsGlobe, BsSearch } from "react-icons/bs";

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavigation = (hash: string) => {
    router.push(hash, undefined, { shallow: true, scroll: false });
  };

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );

  return (
    <motion.div
      className="navbar text-white justify-start gap-6 px-4 sm:px-14 py-5 sticky top-0 z-50 transition-all duration-300 ease-in-out transform"
      style={{ backgroundColor }}
    >
      <div
        className="flex justify-center items-center group cursor-pointer"
        onClick={() => handleNavigation("#home")}
      >
        <span className="text-3xl">A</span>
        <span className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          NANTLA
        </span>
      </div>
      <div className="hidden md:flex w-3/5 justify-evenly">
        <ul className="flex w-full justify-start gap-24">
          <li
            className="group cursor-pointer"
            onClick={() => handleNavigation("#services")}
          >
            <span className="font-medium text-lg relative">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </li>
          <li
            className="group cursor-pointer"
            onClick={() => handleNavigation("#whyChooseUs")}
          >
            <span className="font-medium text-lg relative">
            For Jobseekers
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </li>
          <li
            className="group cursor-pointer"
            onClick={() => handleNavigation("#about")}
          >
            <span className="font-medium text-lg relative">
            For Companies
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </li>
          <li
            className="group cursor-pointer"
            onClick={() => handleNavigation("#careers")}
          >
            <span className="font-medium text-lg relative">
            Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="flex gap-8">
        <button
          type="button"
          title="Menu"
          className="md:hidden flex items-center relative z-50"
          onClick={toggleDrawer}
        >
          <span className="globalnav-image-regular">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <polyline
                id="globalnav-menutrigger-bread-bottom"
                className={`globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom ${
                  isDrawerOpen ? "hidden" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="2 12, 16 12"
              >
                <animate
                  id="globalnav-anim-menutrigger-bread-bottom-open"
                  attributeName="points"
                  keyTimes="0;0.5;1"
                  dur="0.24s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                  values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                ></animate>
                <animate
                  id="globalnav-anim-menutrigger-bread-bottom-close"
                  attributeName="points"
                  keyTimes="0;0.5;1"
                  dur="0.24s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                  values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                ></animate>
              </polyline>
              <polyline
                id="globalnav-menutrigger-bread-top"
                className={`globalnav-menutrigger-bread globalnav-menutrigger-bread-top ${
                  isDrawerOpen ? "hidden" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="2 5, 16 5"
              >
                <animate
                  id="globalnav-anim-menutrigger-bread-top-open"
                  attributeName="points"
                  keyTimes="0;0.5;1"
                  dur="0.24s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                  values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                ></animate>
                <animate
                  id="globalnav-anim-menutrigger-bread-top-close"
                  attributeName="points"
                  keyTimes="0;0.5;1"
                  dur="0.24s"
                  begin="indefinite"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                  values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                ></animate>
              </polyline>
              <line
                id="globalnav-menutrigger-bread-top"
                className={`globalnav-menutrigger-bread globalnav-menutrigger-bread-top text-black ${
                  isDrawerOpen ? "" : "hidden"
                }`}
                x1="3"
                y1="3"
                x2="15"
                y2="15"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              >
                <animate
                  id="globalnav-anim-menutrigger-bread-top-open"
                  attributeName="opacity"
                  from="0"
                  to="1"
                  dur="0.24s"
                  begin="indefinite"
                  fill="freeze"
                />
                <animate
                  id="globalnav-anim-menutrigger-bread-top-close"
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="0.24s"
                  begin="indefinite"
                  fill="freeze"
                />
              </line>
              <line
                id="globalnav-menutrigger-bread-bottom"
                className={`globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom text-black ${
                  isDrawerOpen ? "" : "hidden"
                }`}
                x1="3"
                y1="15"
                x2="15"
                y2="3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              >
                <animate
                  id="globalnav-anim-menutrigger-bread-bottom-open"
                  attributeName="opacity"
                  from="0"
                  to="1"
                  dur="0.24s"
                  begin="indefinite"
                  fill="freeze"
                />
                <animate
                  id="globalnav-anim-menutrigger-bread-bottom-close"
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="0.24s"
                  begin="indefinite"
                  fill="freeze"
                />
              </line>
            </svg>
          </span>
        </button>
      </div>
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-20 h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full h-full p-4 text-black"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ul className="flex flex-col gap-4 mt-12">
                <li
                  className="cursor-pointer"
                  onClick={() => handleNavigation("#services")}
                >
                  <span className="text-2xl font-semibold">About</span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleNavigation("#whyChooseUs")}
                >
                  <span className="text-2xl font-semibold">For Jobseekers</span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleNavigation("#about")}
                >
                  <span className="text-2xl font-semibold">For Companies</span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleNavigation("#careers")}
                >
                  <span className="text-2xl font-semibold">Contact Us</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
