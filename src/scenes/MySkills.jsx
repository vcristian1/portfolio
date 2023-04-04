import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import TechnologiesIcons from "../components/TechnologiesIcons";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
        {/* Header and Image Here */}
        <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-yellow">SKILLS</span>
                </p>
                <LineGradient width="w-1/3" />
                <p className="font-opensans mt-10 mb-10">To keep my skills sharp, I focus on building and maintaining dynamic Full Stack Web Applications.</p>
            </motion.div>

            <div className="mt-16 md:mt-0">
            {isAboveMediumScreens ? (
            <div
                className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
             >
                <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
                />
            </div>
            ) : (
            <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
            />
            )}
            </div>
        </div>

        {/* SKILLS HERE */}
        <div className="md:flex md:justify-between mt-16 gap-32">
            {/* EXPERIENCE HERE */}
            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                // Set to 50 and y so it comes from the bottom instead of -50.
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Languages</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                </div>
                <div className="mt-2 mb-2">
                    <TechnologiesIcons />
                </div>
                
            </motion.div>

            {/* INNOVATIVE HERE */}
            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
                // Set to 50 and y so it comes from the bottom instead of -50.
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">02</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Soft Skills</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]" />
                </div>
                <p className="font-opensans mt-9 mb-9">Growth Mindset | <span className="text-yellow">Creativity</span> | Project Management | <span className="text-yellow">Communication</span> | Problem Solving | <span className="text-yellow">Teamwork</span> |</p>
            </motion.div>

            {/* IMAGINITIVE HERE */}
            <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
                // Set to 50 and y so it comes from the bottom instead of -50.
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            >
                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">03</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                </div>
                <p className="mt-8 font-opensans">Freelancer <a className="text-yellow" href="https://www.fiverr.com/vcristian1/build-a-full-stack-or-front-end-web-app-for-your-business?gig_id=308427504&utm_campaign=base_gig_create_share&utm_content=&utm_medium=shared&utm_source=get_url&utm_term=&view=gig">@ Fiverr</a></p>
                <p className="text-xs font-opensans text-white">March 2023 - Present</p>
                <p className="mt-8 font-opensans">Marketing Analyst <a className="text-yellow" href="https://www.magnoliacap.com/">@ Magnolia Capital</a></p>
                <p className="text-xs font-opensans text-white">August 2022 - March 2023</p>

            </motion.div>
        </div>
    </section>
  )
}

export default MySkills;