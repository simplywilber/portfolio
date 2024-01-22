import { motion } from "framer-motion";

function Home() {
  return (
    //Landing page//
    <main className="container flex justify-between my-[28%] items-center break-words z-1 sm:mt-28 sm:mb-10">
      <motion.div
        layout
        className="flex w-[80%] ml-[25px] h-fit"
        initial={{ opacity: 0, delay: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: 1,
          duration: 0.8,
          delay: 1,
        }}
      >
        <p
          className="text-[25px] text-center sm:text-start sm:text-[40px]"
          style={{ fontFamily: "Italiana, sans-serif", fontStyle: "Italic" }}
        >
          Hey, my name is{" "}
          <span
            className="text-[41px] sm:text-[120px]"
            style={{ fontFamily: "Rozha One, serif" }}
          >
            Wilber Amaya
          </span>{" "}
          and I'm a{" "}
          <span
            className="text-[41px] sm:text-[120px]"
            style={{ fontFamily: "Rozha One, serif" }}
          >
            Full Stack Developer
          </span>
        </p>
      </motion.div>
      
      {/* Vertical nav bar exclusively for the home page */}
      <nav className="hidden absolute top-80 right-40 w-1030 h-[50%] md:flex">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5 }}
          className="flex flex-col gap-10"
        >
          <a
            href="/about"
            className="transition ease-in-out delay-180 hover:scale-110 hover:cursor-pointer"
          >
            <p className="underlineLink">ABOUT</p>
          </a>

          <a
            href="/projects"
            className="transition ease-in-out delay-180 hover:scale-110 hover:cursor-pointer"
          >
            <p className="underlineLink">PROJECTS</p>
          </a>

          <a
            href="/contact"
            className="transition ease-in-out delay-180 hover:scale-110 hover:cursor-pointer"
          >
            <p className="underlineLink">CONTACT</p>
          </a>

          <a
            href="/resume"
            className="transition ease-in-out delay-180 hover:scale-110 hover:cursor-pointer"
          >
            <p className="underlineLink">RESUME</p>
          </a>
        </motion.div>
      </nav>
    </main>
  );
}
export default Home;
