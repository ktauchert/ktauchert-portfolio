import React, { useContext } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiYii } from "react-icons/di";
import { TbBrandThreejs } from "react-icons/tb";
import { RiBlenderLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import { DiPhp } from "react-icons/di";
import { motion } from "framer-motion";
import { iconVariant } from "./helper/motion";
import { LanguageContext } from "@/context/LoadingContext";
import { technologies } from "@/data/technologies";

function Technologies() {
    const {language} = useContext(LanguageContext)
    return (
        <section
            id="technologies"
            className=" h-full w-full mx-auto my-10 overflow-hidden"
        >
            <motion.h2
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0 }}
                viewport={{ once: true }}
                variants={{
                    visible: {
                        y: 0,
                        opacity: 1,
                    },
                    hidden: {
                        y: -50,
                        opacity: 0,
                    },
                }}
                className=" text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-20"
            >
                {technologies[language]}
            </motion.h2>
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
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariant(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="React JS"
                >
                    <RiReactjsLine className="text-6xl text-[#61dbfb]" />
                </motion.div>
                <motion.div
                    variants={iconVariant(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4 "
                    title="NodeJS"
                >
                    <RiNodejsLine className="text-6xl text-[#6cc24a]" />
                </motion.div>
                <motion.div
                    variants={iconVariant(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="NextJS"
                >
                    <RiNextjsLine className="text-6xl text-[#ffff]" />
                </motion.div>
                <motion.div
                    variants={iconVariant(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="MySQL"
                >
                    <GrMysql className="text-6xl text-[#3E6E93]" />
                </motion.div>
                <motion.div
                    variants={iconVariant(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="Yii 1.1"
                >
                    <DiYii className="text-6xl" />
                </motion.div>
                <motion.div
                    variants={iconVariant(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="ThreeJS React Three Fiber"
                >
                    <TbBrandThreejs className="text-6xl" />
                </motion.div>
                <motion.div
                    variants={iconVariant(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="Blender 4"
                >
                    <RiBlenderLine className="text-6xl text-[#EA7600]" />
                </motion.div>
                <motion.div
                    variants={iconVariant(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="Github Gitlab"
                >
                    <RiGithubLine className="text-6xl text-[#fff]" />
                </motion.div>
                <motion.div
                    variants={iconVariant(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="Github Gitlab"
                >
                    <RiFirebaseLine className="text-6xl text-[#fff] font-thin" />
                </motion.div>
                <motion.div
                    variants={iconVariant(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl my-5 border-2 border-zinc-950 bg-zinc-950 p-4"
                    title="Github Gitlab"
                >
                    <DiPhp className="text-6xl text-[#fff] font-thin" />
                </motion.div>
            </motion.div>
            <div className="w-1/2 h-1 border-b mt-20 border-dashed border-zinc-600 mx-auto"></div>
        </section>
    );
}

export default Technologies;
