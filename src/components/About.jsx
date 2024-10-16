import Image from "next/image";
import profilePic from "/public/images/profile_pic.jpg";
import { motion } from "framer-motion";
import { about } from "@/data/about";
import { useContext } from "react";
import { LanguageContext } from "@/context/LoadingContext";
import HTMLReactParser from "html-react-parser";

function About() {
  const { language } = useContext(LanguageContext);
  return (
    <section
      id="about-me"
      className="h-full border-zinc-600 mx-auto px-5 my-10 w-full"
    >
      <h2 className="text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-20">
        {about[language].title[0]}{" "}
        <span className="text-orange-400">{about[language].title[1]}</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center w-full overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
            },
            hidden: {
              x: -50,
              opacity: 0,
            },
          }}
          className="w-full lg:w-1/3 flex justify-center items-center mb-20"
        >
          <Image
            src={profilePic}
            alt="Profilbild"
            className="lg:w-[50%] aspect-auto rounded-2xl max-w-[230px]"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
          variants={{
            visible: {
              x: 0,
              opacity: 1,
            },
            hidden: {
              x: 50,
              opacity: 0,
            },
          }}
          className="w-full lg:w-2/3"
        >
          <div className="flex flex-col">
            {about[language].text.map((paragraph, idx) => (
              <>
                <div key={`par-${idx}`}>{HTMLReactParser(paragraph)}</div>
                <br></br>
              </>
            ))}
          </div>
        </motion.div>
        <div className="w-1/2 h-1 border-b mt-20 border-dashed border-zinc-600"></div>
      </div>
    </section>
  );
}

export default About;
