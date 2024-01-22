import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main>
      <section className="mt-20 mx-[25px]">
        <div
          className="text-[75px] text-center md:text-start sm:text-[120px]"
          style={{ fontFamily: "Rozha One, serif" }}
        >
          <motion.h1
            initial={{ opacity: 0, delay: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
          >
            Projects
          </motion.h1>
        </div>
        <motion.div
          className="flex flex-col p-4 shadow-2xl mt-10 sm:mt-0"
          initial={{ opacity: 0, delay: 1 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.2,
          }}
        >
          <div className="flex flex-col m-2 gap-10 mt-10 sm:flex-row">
            <div className="flex">
              <video width={580} height={320} autoPlay loop muted>
                <source
                  src="/videos/Thunder Show Preview.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="flex flex-col sm:w-[50%]">
              <Link to="https://thundershow.netlify.app/">
                <h2
                  className="text-4xl text-center transition hover:scale-[1.07] sm:text-5xl md:text-6xl"
                  style={{ fontFamily: "Jockey One, sans-seri" }}
                >
                  THUNDER⚡︎SHOW
                </h2>
              </Link>

              <h3 className="mt-2 text-gray-500 text-center text-sm sm:text-md">
                Tech: HTML, CSS, Javascript, React, Next.js, Sanity API, Sanity
                GROQ, Stripe API, TailwindCSS, Netlify, Git
              </h3>
              <p className="mt-5 p-2 text-center text-sm sm:text-md sm:text-start">
                Thunder Show is a veteran-owned e-commerce web application that
                aims to deliver high-quality products with a minimalistic
                design. The platform not only offers a curated selection of
                premium products but also ensures a seamless and intuitive user
                experience. From thoughtfully designed user flows to an easy and
                hassle-free checkout process, Thunder Show prioritizes user
                satisfaction through meticulous attention to detail in every
                aspect of the web application.
              </p>
              <div className="flex self-center items-center mt-5 gap-4 text-sm sm:text-md">
                <Link
                  to="https://github.com/simplywilber/official_thunder_show"
                  target="_blank"
                  className="transition hover:scale-110"
                >
                  <i className="fa-brands fa-github pr-3 text-lg"></i>Github
                </Link>
                <Link
                  to="https://thundershow.netlify.app/"
                  target="_blank"
                  className="transition hover:scale-110"
                >
                  <i class="fa-solid fa-globe pr-3"></i>Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 my-24 sm:flex-row">
            <div className="flex flex-col order-2 sm:w-[50%] sm:order-1">
              <Link to="https://kah-do.netlify.app/" target="_blank">
                <h2
                  className="text-5xl text-center transition hover:scale-[1.07] sm:text-6xl md::text-7xl"
                  style={{ fontFamily: "Rampart One, sans-serif" }}
                >
                  カード
                </h2>
              </Link>

              <p className="text-center"> &#40;Kah-do&#41; </p>
              <h3 className="mt-2 text-gray-500 text-center text-sm sm:text-md">
                Tech: HTML, Javascript, React.js, Google Gemini API,
                TailwindCSS, Netlify, Git
              </h3>
              <p className="mt-5 text-center text-sm sm:text-md sm:text-start">
                The Kah-do AI Chatbot is an innovative web application that
                opens the door for users to seamlessly connect with an advanced
                AI, providing instant answers to a wide range of inquiries.
                Powered by Google's cutting-edge large language multimodal,
                Gemini, the application ensures a sophisticated and intelligent
                interaction experience for users seeking information and
                assistance.
              </p>
              <div className="flex self-center items-center mt-5 gap-4 text-sm sm:text-md">
                <Link
                  to="https://github.com/simplywilber/Kah-do-Ai"
                  target="_blank"
                  className="transition hover:scale-110"
                >
                  <i className="fa-brands fa-github pr-3 text-lg"></i>Github
                </Link>
                <Link
                  to="https://kah-do.netlify.app/"
                  target="_blank"
                  className="transition hover:scale-110"
                >
                  <i class="fa-solid fa-globe pr-3"></i>Visit
                </Link>
              </div>
            </div>
            <div className="flex shadow-xl order-1 sm:order-2">
              <video width={580} height={320} autoPlay loop muted>
                <source src="/videos/Kah-do Preview.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex flex-col gap-10 mb-10 sm:flex-row">
            <div className="flex shadow-xl">
              <video width={580} height={320} autoPlay loop muted>
                <source src="/videos/Linguinis Preview.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col sm:w-[50%]">
              <Link to="https://linguinis.netlify.app/" target="_blank">
                <h2
                  className="text-4xl text-center transition hover:scale-[1.07] sm:text-5xl"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Linguinis
                </h2>
              </Link>
              <h3 className="mt-2 text-gray-500 text-center text-sm sm:text-md">
                Tech: HTML, CSS, Javascript, Svelte, Stripe API, Node.js
                Firebase Auth, Firebase NoSQL, TailwindCSS, Netlify, Git
              </h3>
              <p className="mt-5 text-center text-sm sm:text-md sm:text-start">
                Linguinis is an organizational to-do list web application that
                allows the user to better compartmentalize their life. Giving
                the user the ability to create, read, edit and delete notes at
                any time. The to-do list is responsive and the authentication
                and database infrastructure allows the user to take the list
                with them on their mobile, and then access it later on a
                different device.
              </p>
              <div className="flex self-center items-center mt-5 gap-4 text-sm sm:text-md">
                <Link
                  to="https://github.com/simplywilber/to-do-list"
                  target="_blank"
                  className="transition hover:scale-110"
                >
                  <i className="fa-brands fa-github pr-3 text-lg "></i>Github
                </Link>
                <Link
                  to="https://linguinis.netlify.app/"
                  target="_blank"
                  className="transition hover:scale-110"
                >
                  <i class="fa-solid fa-globe pr-3"></i>Visit
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
