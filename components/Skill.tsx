import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
    directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                className="w-24 h-24 xl:w-32 xl:h-32"
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    className="rounded-full border border-gray-500 object-cover  filter group-hover:grayscale transition duration-300 ease-in-out"
                    alt="skill"
                    src={"https://picsum.photos/200"}
                    width="200"
                    height="200"
                />
            </motion.div>
            <div className="rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100 ">
                        100%
                    </p>
                </div>
            </div>
        </div>
    );
}
