import Navbar from "@/components/Navbar";
import LoadingContextProvider from "@/context/LoadingContext";
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
            <html lang="en" className={montserat.className}>
                <body className=" text-zinc-100 antialiased selection:bg-cyan-300 selection:text-cyan-900">
                    {/* uses bg-cyan-900 */}
                    <div className="fixed top-0 h-full w-full -z-10">
                        <div
                            id="background"
                            className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_50%_70%_at_50%_-10%,rgba(22,78,99,0.4),rgba(255,255,255,0))]"
                        ></div>
                    </div>
                    <header>
                        <Navbar />
                    </header>
                    <main className="max-w-[1280px] m-auto">{children}</main>
                </body>
            </html>
    );
}
