import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function About() {
  return (
    <main>
      <article className="mt-20 mx-[25px]">
        <div
          className="text-[90px] text-center md:text-start sm:text-[120px]"
          style={{ fontFamily: "Rozha One, serif" }}
        >
          <motion.h1
            initial={{ opacity: 0, delay: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
          >
            About
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, delay: 1 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.2,
          }}
        >
          <div className="flex flex-col order-last items-around mt-10 container justify-around sm:mt-4 sm:flex-row sm:order-first">
            <div className="flex-col flex mt-10 shadow-2xl p-6 sm:w-[50%] sm:mt-0">
              <h3
                className="mb-3 text-4xl p-3"
                style={{ fontFamily: "East Sea Dokdo, sans-serif" }}
              >
                Hey!
              </h3>
              <p className="mb-5">
                I'm Wilber Amaya, a versatile software engineer specializing in
                full-stack web development and creative UX/UI design. Currently
                situated on the island of Guam, I'm set on starting a new
                chapter in Washington state in 2024 post military.
              </p>
              <p className="mb-5">
                As a U.S. veteran turned developer, I bring a unique perspective
                and unwavering commitment to the dynamic world of programming.
                My portfolio showcases a blend of technical prowess in both
                front-end and back-end development, coupled with artistic flair,
                reflecting a refined approach to creating innovative digital
                experiences.
              </p>
              <p className="mb-5">
                Beyond the screen, I find joy through fitness, travel, and
                trying out diffrent types of foods from around the world. I am
                excited to be part of this journey in innovation, exploration,
                and craftsmanship and I look forward to bringing ideas to life
                in the digital realm with you and other developers. Let's
                connect and turn visions into reality{" "}
                <i className="fa-solid fa-bounce fa-cow ml-1"></i>
              </p>
              <p
                className="text-end text-3xl p-3"
                style={{ fontFamily: "East Sea Dokdo, sans-serif" }}
              >
                -Wil
              </p>
              <div className="flex justify-evenly gap-6 py-5 sm:justify-normal">
                <Link to="/contact" className="transition hover:scale-110">
                  Contact
                  <ArrowOutwardIcon className="p-1 mb-1" />
                </Link>
                <Link
                  to="/resume"
                  className="transition hover:scale-110"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Resume <ArrowOutwardIcon className="p-1 mb-1" />
                </Link>
              </div>
            </div>
            <img
              src="/images/selfie.jpg"
              alt="A picture of me"
              className="flex self-center order-first w-[55%] rounded-full shadow-gray-700 shadow-2xl duration-300 hover:scale-110 sm:order-last sm:h-[450px] sm:w-auto"
            />
          </div>
        </motion.div>
      </article>
    </main>
  );
}
