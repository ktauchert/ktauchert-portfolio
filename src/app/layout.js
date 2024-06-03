import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LanguageContextProvider from "@/context/LoadingContext";
import { Montserrat, Space_Mono } from "next/font/google";
import "./globals.css";

const space_mono = Space_Mono({ subsets: ["latin"], weight: "400" });
const montserat = Montserrat({
    weight: "300",
    style: "normal",
    subsets: ["latin"],
});

export const metadata = {
    title: "KTauchert-Dev",
    description:
        "Full stack web developer with a passion for 3D, Three.js, Blender, and coffee. Check out my portfolio!",
};

export default function RootLayout({ children }) {
    return (
        <LanguageContextProvider>
            <html lang="en" className={`${montserat.className} scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-[#171717] h-32 overflow-y-scroll`}>
                <body className=" text-zinc-100 antialiased selection:bg-cyan-300 selection:text-cyan-950 overflow-x-hidden">
                    {/* uses bg-cyan-900 */}
                    <div className="fixed top-0 h-full w-full -z-10">
                        <div
                            id="background"
                            className=" top-0 z-[-2] h-full w-full bg-neutral-900 bg-[radial-gradient(ellipse_50%_70%_at_50%_-10%,rgba(22,78,99,0.4),rgba(255,255,255,0))]"
                        ></div>
                    </div>
                    <header>
                        <Navbar />
                    </header>
                    <main className="max-w-[1280px] lg:m-auto px-5">
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </LanguageContextProvider>
    );
}
