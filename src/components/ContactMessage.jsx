import { motion } from "framer-motion";
export default function ContactMessage() {
  return (
    <motion.div
      className="overflow-clip"
      initial={{ opacity: 0, delay: 1 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2,
        ease: "easeIn",
      }}
    >
      <img
        src="/images/cloud1.png"
        width={500}
        height={500}
        alt="cloud"
        className="cloud1 left-24 z-0"
      ></img>
      <div className="p-5">
        <h2 className="text-7xl">Hello,</h2>
        <p className="my-10 z-10">
          Want to connect? Send me an email, or reach out using your preferred
          contact method 🐧
        </p>
        <p
          className="text-end text-4xl z-10"
          style={{ fontFamily: "East Sea Dokdo, sans-serif" }}
        >
          -Wil (Pinguinoo)
        </p>{" "}
      </div>
      <img
        src="/images/cloud2.png"
        width={600}
        height={600}
        alt="cloud"
        className="cloud2 relative bottom-10 right-10 z-0"
      ></img>
    </motion.div>
  );
}
