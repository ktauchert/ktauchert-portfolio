import React from "react";
import Cat from "./Cat";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <nav className="flex h-[60px] w-full">
            <div className="flex max-w-[1280px] m-auto w-full h-full justify-between items-center mx-auto">
                <div className="flex justify-center items-center h-full">
                    <Link href="/">
                        <Cat id="brand-icon" scale={0.6} />
                    </Link>
                    <span
                        id="brand-name"
                        className="text-xl text-white tracking-wide hidden lg:block"
                    >
                        KTauchert-Dev
                    </span>
                </div>
                <div
                    id="social-links"
                    className="flex items-center justify-end text-4xl gap-4 text-zinc-100 mr-5"
                >
                    <Link
                        href={
                            "https://www.linkedin.com/in/karsten-t-ab62982b4/"
                        }
                        target="_blank"
                    >
                        <IoLogoLinkedin />
                    </Link>
                    <Link href={"https://github.com/ktauchert"} target="_blank">
                        <IoLogoGithub />
                    </Link>
                    <Link href={"#contact"}>
                        <IoIosMail />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
