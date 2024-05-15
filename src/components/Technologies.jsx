import React from "react";
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

function Technologies() {
    return (
        <section id="technologies" className="max-w-[1280px] h-full w-full border-b border-zinc-600 pb-16 mx-auto ">
            <motion.h2
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="my-20 text-center text-4xl text-orange-600 text-bold uppercase tracking-wider"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.5,
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
        </section>
    );
}

export default Technologies;
