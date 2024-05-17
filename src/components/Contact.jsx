"use client";
import { LanguageContext } from "@/context/LoadingContext";
import { contact } from "@/data/contact";
import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiDownload2Line } from "react-icons/ri";

function Contact() {
    const { language } = useContext(LanguageContext);
    return (
        <section id="contact" className=" h-full w-full mx-auto px-5 my-16 overflow-hidden">
            <h2 className=" text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-10">
                {contact[language].title}
            </h2>
            <div className="flex flex-wrap justify-center items-center">
                <div className="mx-auto">
                    <p title="Name">
                        <span className="text-2xl">
                            <RiAccountCircleLine className="inline mr-10" />
                            {contact[language].name}
                        </span>
                    </p>
                    <p className="my-3">
                        <span className="text-xl hover:text-orange-600 text-cyan-600 break-words">
                            <Link
                                href={
                                    "mailto:developer@ktauchert.de?subject=Nachricht%20vom%20Portfolio&body=Hallo%20Karsten%2C%0D%0A%0D%0A"
                                }
                            >
                                <RiMailLine
                                    className="inline mr-10"
                                    title="E-Mail"
                                />
                                <span className="">
                                    {contact[language].email}
                                </span>
                            </Link>
                        </span>
                    </p>
                    <p>
                        <span className="text-xl">
                            <Link
                                className="hover:text-orange-600 text-cyan-600"
                                href={"/files/CV_Karsten_Tauchert_Web_Dev.pdf"}
                                target="_blank"
                                rel="noopener noreferrer"
                                locale={false}
                                download
                                title="Download CV"
                            >
                                <RiDownload2Line
                                    className="inline mr-10 "
                                    title="CV-Download"
                                />
                                Download CV
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
