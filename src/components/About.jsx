import Image from "next/image";
import profilePic from "/public/images/profile_pic.jpg";
import { motion } from "framer-motion";

function About() {
    return (
        <section className="max-w-[1280px] h-full w-full border-b border-zinc-600 mx-auto px-5 pb-10">
            <h2 className="my-24 text-center text-4xl text-orange-600 text-bold uppercase tracking-wider">
                About{" "}
                <motion.span
                    whileInView={{
                        opacity: 1,
                    }}
                    initial={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="text-orange-400"
                >
                    Me
                </motion.span>
            </h2>
            <div className="flex flex-wrap justify-center items-center">
                <motion.div
                    whileInView={{
                        x: 1,
                        opacity: 1,
                    }}
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="w-full lg:w-1/2 flex justify-center items-center mb-20"
                >
                    <Image
                        src={profilePic}
                        alt="Profilbild"
                        className="lg:w-[50%] aspect-auto rounded-2xl max-w-[180px]"
                    />
                </motion.div>
                <motion.div
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At impedit eligendi ex ab! Labore ex cupiditate soluta
                        natus dolores harum earum, atque aliquid eius
                        repudiandae alias, quas error libero sint. Iusto,
                        doloremque. Quidem adipisci asperiores id nam magnam
                        placeat officia cumque est provident rem error
                        voluptatum, alias sunt sit totam at sint saepe,
                        voluptatum a alias illo obcaecati quidem placeat quasi
                        voluptatem debitis odio. Nulla eos voluptatum nam?
                        Soluta ipsam facere nisi quae enim pariatur veniam, fuga
                        consectetur obcaecati similique eius minus? Accusamus
                        facere laborum deserunt, est, magni atque veritatis
                        perspiciatis ratione distinctio dolore fugit laudantium
                        optio omnis! Tenetur amet perferendis, rem quia, saepe
                        nobis a suscipit blanditiis, hic explicabo ducimus?
                        Atque reiciendis dolore eos nulla corrupti cupiditate
                        incidunt maxime doloremque impedit? Error alias
                        cupiditate eos in aliquid. Dolorum eligendi impedit
                        fugit a laborum commodi eaque quaerat voluptas magnam,
                        doloribus velit saepe accusantium quas cum? Quibusdam
                        unde omnis ipsum odio maiores assumenda, impedit nulla
                        fugiat repellat aliquam debitis.
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
