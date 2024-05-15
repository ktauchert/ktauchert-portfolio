"use client";
import { contact } from "@/data/contact";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiDownload2Line } from "react-icons/ri";

function Contact() {
    return (
        <section
            id="contact"
            className="max-w-[1280px] h-full w-full border-b border-zinc-600 mx-auto px-5 pb-10"
        >
            <h2 className="my-24 text-center text-4xl text-orange-600 text-bold uppercase tracking-wider">
                Contact Me
            </h2>
            <div className="flex flex-wrap justify-center items-center">
                <div className="mx-auto">
                    <p title="Name">
                        <span className="text-xl">
                            <RiAccountCircleLine className="inline mr-10" />
                            {contact.name}
                        </span>
                    </p>
                    <p className="my-3">
                        <span className="text-xl">
                            <RiMailLine
                                className="inline mr-10"
                                title="E-Mail"
                            />
                            <Link
                                href={
                                    "mailto:developer@ktauchert.de?subject=Nachricht%20vom%20Portfolio&body=Hallo%20Karsten%2C%0D%0A%0D%0A"
                                }
                            >
                                {contact.email}
                            </Link>
                        </span>
                    </p>
                    <p>
                        <span className="text-xl">
                            <RiDownload2Line
                                className="inline mr-10"
                                title="CV-Download"
                            />
                            <Link
                                href={"/files/CV_Karsten_Tauchert_Web_Dev.pdf"}
                                target="_blank"
                                rel="noopener noreferrer"
                                locale={false}
                                download
                                title="Download CV"
                            >
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
