import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import awesomeImage from "../assets/awesome_profile.jpg";
import Link from "next/link";

type Props = {};

const heroButtons = {
    de: ["Über mich", "Erfahrung", "Skills", "Projekte"],
    en: ["About", "Experience", "Skills", "Projects"],
};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Karsten Tauchert",
            "Coffe_until_stomach_hurts.tsx",
            "<GodzillaAndZen />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    const lang = "de";

    return (
        <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <div className="relative rounded-full h-32 w-32 mx-auto ">
                <Image
                    className="rounded-full object-contain"
                    alt="profile-image"
                    src={awesomeImage}
                    height="3096"
                    width="4360"
                />
            </div>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
                    Fullstack - Developer
                </h2>
                <h1 className="text-2xl lg:text-3xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#884321" />
                </h1>
                <div className="pt-5">
                    <Link href="#about"></Link>
                    <Link href="#experience"></Link>
                    <Link href="#skills"></Link>
                    <Link href="#projects"></Link>
                    <button className="heroButton">
                        {heroButtons[lang][0]}
                    </button>
                    <button className="heroButton">
                        {heroButtons[lang][1]}
                    </button>
                    <button className="heroButton">
                        {heroButtons[lang][2]}
                    </button>
                    <button className="heroButton">
                        {heroButtons[lang][3]}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
