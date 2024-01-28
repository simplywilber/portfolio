import { motion } from "framer-motion";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function Resume() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <section className="flex flex-1 flex-col mt-20 mx-[25px]">
        <div className="flex flex-col text-center gap-10 mb-10 sm:flex-row sm:text-start sm:mb-0">
          <motion.h1
            initial={{ opacity: 0, delay: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            className="text-7xl sm:text-[120px]"
            style={{ fontFamily: "Rozha One, serif" }}
          >
            Digital Résumé
          </motion.h1>
          <motion.div
            className="flex self-center transition gap-1 cursor-pointer hover:scale-110 "
            initial={{ opacity: 0, delay: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.8,
            }}
          >
            <a href="/Wilber_Amaya_Resume.pdf" download>
              <FileDownloadIcon className="my-1" fontSize="small" />
              PDF CV/Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex-col w-full p-4 mx-10 mw-[1000px] mx-auto shadow-2xl sm:p-14 "
          initial={{ opacity: 0, delay: 1 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.5,
          }}
        >
          <h2 className="flex text-bold text-3xl pb-10 text-center sm:text-5xl sm:text-start">
            Wilber Amaya - Web Developer
          </h2>
          <div className="flex flex-col text-center items-center gap-1.5 pb-5 sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">Email </h4>{" "}
            <a
              className="underline text-sm sm:text-md"
              href="mailto:simplywilber@gmail.com"
              target="_blank"
            >
              simplywilber@gmail.com
            </a>
          </div>
          <div className="flex flex-col text-center items-center gap-1.5 pb-5 sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">Github </h4>{" "}
            <a
              className="underline"
              href="https://github.com/simplywilber"
              target="_blank"
            >
              simplywilber
            </a>
          </div>
          <div className="flex flex-col text-center items-center gap-1.5 pb-10 sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">LinkedIn </h4>{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/wilber-amaya-maurisio/"
              target="_blank"
            >
              Wilber Amaya
            </a>
          </div>
          <h2 className="text-bold text-center text-2xl pb-10 sm:text-4xl sm:text-start">
            Skills
          </h2>
          <div className="flex flex-col items-center gap-1.5 pb-5 sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">
              Programming Languages{" "}
            </h4>
            <p>Javascript, HTML, CSS, SQL</p>
          </div>
          <div className="flex flex-col text-center items-center gap-1.5 pb-5 sm:text-start sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">Javascript </h4>
            <p>React.js, Node.js, Next.js, SvelteKit</p>
          </div>
          <div className="flex flex-col text-center items-center gap-1.5 pb-5 sm:text-start sm:flex-row">
            <h4 className="font-bold text-center text-lg sm:text-xl">
              Development Tools{" "}
            </h4>
            <p>
              Firebase, PostgreSQL, Git, Github, Postman, Sanity, Stripe,
              Tailwind CSS, Huggingface.js, Framer-Motion, Bootstrap, Vite,
              Netlify
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-1.5 pb-5 sm:text-start sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">
              Hi-Lo Fidelity Design{" "}
            </h4>
            <p>Wireframing, User flows, Prototyping </p>
          </div>
          <div className="flex flex-col text-center items-center gap-1.5 pb-10 sm:text-start sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">Design Tools</h4>
            <p>Figma, Canvas, Good Notes </p>
          </div>
          <h2 className="text-bold text-center text-2xl pb-10 sm:text-4xl sm:text-start">
            Languages
          </h2>
          <div className="flex flex-col text-center items-center gap-1.5 pb-5 sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">English</h4>
            <p>Fluent </p>
          </div>
          <div className="flex flex-col text-center items-center gap-1.5 pb-10 sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">Spanish</h4>
            <p>Fluent </p>
          </div>
          <h2 className="text-bold text-center text-2xl pb-10 sm:text-4xl sm:text-start">
            Projects
          </h2>
          <div className="flex flex-col items-center gap-1.5 pb-10 sm:flex-row">
            <h4 className="font-bold text-lg sm:text-xl">Projects </h4>
            <a className="underline" href="/projects">
              Checkout my projects here
            </a>
          </div>
          <h2 className="text-bold text-center text-2xl pb-10 sm:text-4xl sm:text-start">
            Education
          </h2>
          <div className="flex flex-col text-center items-center gap-1.5 pb-5 sm:flex-row sm:text-start">
            <h4 className="flex font-bold text-lg sm:text-xl sm:w-[620px]">
              London App Brewery (2023)
            </h4>
            <p>
              Successfully completed a comprehensive bootcamp course in
              full-stack web development, with a focus on mastering complex
              programming concepts and hands-on experience in designing and
              implementing dynamic web applications.
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-7 pb-10 sm:flex-row sm:text-start">
            <h4 className="flex font-bold text-lg sm:text-xl sm:w-[535px]">
              United Service Military Apprenticeship Program (2021)
            </h4>
            <p>
              Completed an apprenticeship as a Computer Operator while
              overseeing electronic computer systems and peripherals. Executed
              commands, configured controls, and proactively addressed operating
              and error messages.
            </p>
          </div>
          <h2 className="text-bold text-center text-2xl pb-10 sm:text-4xl sm:text-start">
            Work Experience
          </h2>
          <div className="flex flex-col text-center items-center gap-1.5 pb-5 sm:text-start sm:flex-row">
            <h4 className="flex font-bold text-lg sm:text-xl sm:w-[460px]">
              United States Navy (2016-2023)
            </h4>
            <p>
              Served as an executive assistant involving National Security,
              contributing to diverse teams, thriving in high-pressure
              environments, and cultivating effective leadership and
              communication skills.
            </p>
          </div>
        </motion.div>
        <div className="flex justify-center mt-16">
          <a
            className="cursor-pointer transition underline hover:scale-110"
            onClick={scrollToTop}
          >
            Back to top
          </a>
        </div>
      </section>
    </main>
  );
}
