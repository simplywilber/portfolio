import { DarkModeSwitch, defaultProperties } from "react-toggle-dark-mode";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <header>
      <div className="hidden md:flex justify-between h-14 px-7 pt-5">
        <div className="duration-200 hover:scale-110">
          <h3>
            <a href="/">WILBER AMAYA</a>
          </h3>
        </div>
        <div>
          {/* Used the ternary operator to only render the horizontal nav bar on pages not "/" */}
          {window.location.pathname != "/" ? (
            <nav className="flex gap-5">
              <a href="/" className="underlineLink transition hover:scale-110">
                HOME
              </a>
              <Link
                to="/about"
                className="underlineLink transition hover:scale-110"
              >
                ABOUT
              </Link>
              <Link
                to="/projects"
                className="underlineLink transition hover:scale-110"
              >
                PROJECTS
              </Link>
              <Link
                to="/contact"
                className="underlineLink transition hover:scale-110"
              >
                CONTACT
              </Link>
              <Link
                to="/resume"
                className="underlineLink transition hover:scale-110"
              >
                RESUME
              </Link>
            </nav>
          ) : null}
        </div>

        {/* The dark mode button that uses props to control the theme */}
        <div>
          <DarkModeSwitch
            checked={props.isDarkMode}
            onChange={props.toggleDarkMode}
            size={26}
            animationProperties={defaultProperties}
            moonColor="#EEEEEE"
            sunColor="#222831"
          />{" "}
        </div>
      </div>

      {/* Start of mobile navigation */}
      {/* Closed menu */}
      <div className="flex items-center justify-between h-14 px-4 md:hidden">
        <div className="duration-200 hover:scale-110">
          <h3>
            <a href="/">WILBER AMAYA</a>
          </h3>
        </div>
        <div className="flex gap-2">
          <div className="self-center">
            <DarkModeSwitch
              checked={props.isDarkMode}
              onChange={props.toggleDarkMode}
              size={18}
              animationProperties={defaultProperties}
              moonColor="#EEEEEE"
              sunColor="#222831"
            />{" "}
          </div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            MENU
          </div>
        </div>

        {/* Opened menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed left-0 top-0 w-screen h-full px-4 pt-5 origin-top bg-[#E6E0DD] z-20"
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.12, 0, 0.39, 0],
                },
              }}
              exit={{ scaleY: 0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col h-full text-gray-700">
                <div className="flex justify-between">
                  <h3>
                    <a href="/">WILBER AMAYA</a>
                  </h3>
                  <p className="cuursor-pointer" onClick={toggleMenu}>
                    CLOSE
                  </p>
                </div>

                <nav>
                  {" "}
                  <motion.div
                    className="overflow-hidden flex flex-col items-center gap-6"
                    initial={{
                      y: "30vh",
                      transition: {
                        duration: 0.5,
                      },
                    }}
                    open={{
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    }}
                  >
                    <a
                      href="/"
                      className="underlineLink transition hover:scale-110"
                    >
                      HOME
                    </a>
                    <a
                      href="/about"
                      className="underlineLink transition hover:scale-110"
                    >
                      ABOUT
                    </a>
                    <a
                      href="/projects"
                      className="underlineLink transition hover:scale-110"
                    >
                      PROJECTS
                    </a>
                    <a
                      href="/contact"
                      className="underlineLink transition hover:scale-110"
                    >
                      CONTACT
                    </a>
                    <a
                      href="/resume"
                      className="underlineLink transition hover:scale-110"
                    >
                      RESUME
                    </a>{" "}
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
