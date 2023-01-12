import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm, Resolver } from "react-hook-form";

type Props = {};

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact({}: Props) {
    const toMail = false;
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        if (toMail) {
            window.location.href = `
                mailto:developer@ktauchert.de?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})
            `;
        }
    };
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
            <h3 className="absolute top-14 md:top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need
                </h4>
                <div>
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon
                            className="text-[#A7AB0A] h-7
                            w-7
                            animate-pulse"
                        />
                        <p>+491728005307</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon
                            className="text-[#A7AB0A] h-7
                            w-7
                            animate-pulse"
                        />
                        <p>develope@ktauchert.de</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon
                            className="text-[#A7AB0A] h-7
                            w-7
                            animate-pulse"
                        />
                        <p>123 Entwicklungs Stra0e</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto"
                >
                    <div className="flex space-x-2">
                        <input
                            {...register("name")}
                            className="contactInput"
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                        />
                        <input
                            {...register("email")}
                            className="contactInput"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                        />
                    </div>
                    <input
                        {...register("subject")}
                        className="contactInput"
                        type="text"
                        placeholder="Subject"
                        id="subject"
                        name="subject"
                    />
                    <textarea
                        {...register("message")}
                        className="contactInput"
                        placeholder="Message"
                        id="message"
                        name="message"
                    />
                    <button
                        type="submit"
                        className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold hover:bg-[#F7AB0A]/70"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
