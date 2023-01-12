import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePicTwo from "../assets/awesome_profile_2.jpg";

type Props = {};

function About({}: Props) {
    return (
        <div className="h-screen flex flex-col  relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-14 md:top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
                About
            </h3>
            <div className="-mb-20 md:mb-0 flex-shrink-0 overflow-hidden">
                <Image
                    className="w-60 aspect-square  md:w-60 md:aspect-auto rounded-full object-cover md:rounded-lg "
                    alt="profile-image"
                    src={profilePicTwo}
                    height="2400"
                    width="2400"
                />
            </div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                }}
                viewport={{ once: true }}
                className="space-y-10 px-0 md:px-10"
            >
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        little
                    </span>{" "}
                    background.
                </h4>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </motion.div>
        </div>
    );
}

export default About;
