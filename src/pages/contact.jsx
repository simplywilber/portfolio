import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactMessage from "../components/ContactMessage";

export default function Contact() {
  return (
    <main>
      <section className="mt-20 mb-10 mx-[25px]">
        <motion.h1
          className="text-7xl text-center sm:text-start sm:text-[120px]"
          initial={{ opacity: 0, delay: 1 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
          style={{ fontFamily: "Rozha One, serif" }}
        >
          Contact
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, delay: 1 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.2,
          }}
          className="flex gap-10 flex-col mt-10 sm:mt-0 sm:flex-row"
        >
          <div className="flex flex-col shadow-2xl sm:w-[50%]">
            <ContactMessage />
          </div>

          <div className="flex flex-col p-5 text-center sm:text-start sm:w-[50%]">
            <h2 className="text-4xl mb-5 sm:text-2xl sm:mb-3">EMAIL</h2>
            <Link
              to="mailto:simplywilber@gmail.com"
              target="_blank"
              className="items-center gap-2 mb-10 w-fit transition hover:scale-[1.02]"
            >
              <i className="fa-regular fa-envelope pr-2"></i>
              Simplywilber@gmail.com
            </Link>
            <h2 className="text-4xl mb-5 sm:text-2xl sm:mb-3">SOCIALS</h2>
            <div className="grid grid-cols-2 justify-center gap-8 sm:w-fit sm:grid-cols-3">
              <Link
                to="https://github.com/simplywilber"
                target="_blank"
                className="flex gap-2 items-center transition hover:scale-110"
              >
                <i class="fa-brands fa-github text-lg"></i>
                <p>GitHub</p>
              </Link>

              <Link
                to="https://www.linkedin.com/in/wilber-amaya-maurisio/"
                target="_blank"
                className="flex gap-2 items-center transition hover:scale-110"
              >
                <i className="fa-brands fa-linkedin text-lg"></i> LinkedIn
              </Link>

              <Link
                to="https://www.instagram.com/simplywilber"
                target="_blank"
                className="flex gap-2 items-center transition hover:scale-110"
              >
                <i class="fa-brands fa-instagram text-lg"></i> instagram
              </Link>
              <Link
                to="https://discord.com/users/894012643004801045"
                target="_blank"
                className="flex gap-2 items-center transition hover:scale-110"
              >
                <i class="fa-brands fa-discord text-lg"></i> Discord
              </Link>
              <Link
                to="https://www.tiktok.com/simplywilber"
                target="_blank"
                className="flex gap-2 items-center transition hover:scale-110"
              >
                <i class="fa-brands fa-tiktok text-lg"></i> Tiky-Tok
              </Link>
            </div>{" "}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
