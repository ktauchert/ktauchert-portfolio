"use client";
import React, { useEffect, useState } from "react";
import Cat from "./Cat";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";
import { getLocalStorage, setLocalStorage } from "./helper/storage";
import { icons } from "@/data/weather_icons";
import Image from "next/image";

const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/178087?apikey=fAu9HRBJ2qxPjYjurPfGmxDd4BEJA7dm&language=en-us`;

function Navbar() {
  const [weatherIcon, setWeatherIcon] = useState("06");
  const [weatherText, setWeatherText] = useState("Wechselhaft");
  const [weatherTemp, setWeatherTemp] = useState("21.2");

  const checkWeather = () => {
    console.log(icons[1].src, getLocalStorage("weatherData"));
    if (getLocalStorage("weatherData")) {
      let weatherData = getLocalStorage("weatherData");
      console.log(weatherData);
      const today = new Date();
      const timer = new Date(weatherData.timer);
      const intervall = 60 * 60 * 60;
      const diff = today.getTime() - timer.getTime() / 1000;

      if (diff > intervall) {
        weatherData.timer = today;
        fetchWeatherData();
      } else {
        setWeatherIcon(weatherData.icon);
        setWeatherTemp(weatherData.temp);
        setWeatherText(weatherData.text);
      }
    } else {
      fetchWeatherData();
    }
  };

  const fetchWeatherData = () => {
    let weatherData = {
      timer: null,
      icon: null,
      text: null,
      temp: null,
    };
    weatherData.timer = new Date();
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((json) => {
        weatherData.icon = json[0].WeatherIcon;
        weatherData.temp = json[0].Temperature.Metric.Value;
        weatherData.text = json[0].WeatherText;

        setWeatherIcon(json[0].WeatherIcon);
        setWeatherTemp(json[0].Temperature.Metric.Value);
        setWeatherText(json[0].WeatherText);

        setLocalStorage("weatherData", weatherData);

        console.log(weatherData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    checkWeather();
  }, []);

  return (
    <nav className="flex h-[60px] w-full">
      <div className="flex max-w-[1280px] m-auto w-full h-full justify-between items-center mx-auto">
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
          className="flex justify-center items-center h-full"
        >
          <Link href="/">
            <Cat id="brand-icon" scale={0.6} />
          </Link>
          <span
            id="brand-name"
            className="text-xl text-white tracking-wide hidden lg:block"
          >
            KTauchert-Dev
          </span>
        </motion.div>
        <motion.div
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
          className="weather flex items-center"
        >
          <Image src={icons[weatherIcon]} alt={`weather-icon-${weatherIcon}`} />
          <span className="lg:block max-[640px]:hidden sm:hidden">
            {weatherText + " " + weatherTemp}°C (Berlin)
          </span>
          <span className="lg:hidden sm:block">{weatherTemp}°C (Berlin)</span>
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
          id="social-links"
          className="flex items-center justify-end text-4xl gap-4 text-zinc-100 mr-5"
        >
          <Link
            href={"https://www.linkedin.com/in/karsten-t-ab62982b4/"}
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
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
