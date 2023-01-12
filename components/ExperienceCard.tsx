import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative rounded-full h-24 w-24 mx-auto xl:h-[200] xl:w-[200] opject-cover object-center"
            >
                <Image
                    className="rounded-full object-contain"
                    alt="profile-image"
                    src={"https://picsum.photos/300"}
                    height="300"
                    width="300"
                />
            </motion.div>
            <div className="px-0 md:px-10">
                <h4 className="text-3xl font-light">CEO of KTauchert-Dev</h4>
                <p className="font-bold text-2xl mt-1">KTauchert-Dev</p>
                <div className="flex space-x-2 my-2">
                    <div className="relative rounded-full h-7 w-7 opject-cover object-center">
                        <Image
                            className="rounded-full object-contain"
                            alt="profile-image"
                            src={"https://picsum.photos/100"}
                            height="100"
                            width="100"
                        />
                    </div>
                    <div className="relative rounded-full h-7 w-7 opject-cover object-center">
                        <Image
                            className="rounded-full object-contain"
                            alt="profile-image"
                            src={"https://picsum.photos/100"}
                            height="100"
                            width="100"
                        />
                    </div>
                    <div className="relative rounded-full h-7 w-7 opject-cover object-center">
                        <Image
                            className="rounded-full object-contain"
                            alt="profile-image"
                            src={"https://picsum.photos/100"}
                            height="100"
                            width="100"
                        />
                    </div>
                </div>
                <p className="uppercase py-5 text-gray-300">
                    Startet work... - Ended...
                </p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                    <li>Lorem ipsum dolor sit amet,</li>
                </ul>
            </div>
        </article>
    );
}
