import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import TechnologiesIcons from "../components/TechnologiesIcons";
import FrameworkIcons from "../components/FrameworkIcons";
import { TypeAnimation } from 'react-type-animation';
import { SiAccenture } from "react-icons/si"


const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
        {/* Header and Image Here */}
        <div className="md:flex md:justify-between md:gap-16 mt-20 md:mt-32">
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
                <div className="mb-[50px] md:mb-[50px]" />
                <p
                className="font-thin text-[18px] md:text-[20px] lg:text-[24px] text-left">To keep my skills sharp, I build and maintain full stack web applications using a variety of frameworks and tools.</p>
                
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
        <div className="w-full md:flex md:justify-between mt-16 gap-14">
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
                        <p className="font-playfair font-semibold text-3xl mt-3">Frameworks & Databases</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-purple absolute right-0 top-0 z-[-1]" />
                </div>
                <div className="mt-2 mb-2">
                    <FrameworkIcons />
                </div>            
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
                        <p className="font-playfair font-semibold text-3xl mt-3">Work Experience</p>
                    </div>
                    <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                </div>
                <div className="mt-14 md:mt-[30px] lg:mt-18 mb-2">
                    <div className="flex">
                        <p className="text-1xl lg:text-[18px]"><span className="ml-[-8px]"></span>Custom Software Engineering Analyst @ <a href="https://www.accenture.com/us-en" target="_blank" rel="noreferrer" className="hover:opacity-75 underline transition duration-500 hover:text-[#6a00f4]">Accenture</a></p>
                    </div>
                    <p className="text-sm font-thin"><span className=""></span> June 2023 - Present</p>
                </div>  
                <div className="md:mt-[30px] lg:mt-18 mb-2">
                    <p className="text-1xl lg:text-[18px]"><span className="ml-[-10px]"></span>Front End Engineer @ Self Employed</p>
                    <p className="text-sm font-thin"><span className=""></span> March 2023 - Present</p>
                </div>  
            </motion.div>
        </div>
    </section>
  )
}

export default MySkills;