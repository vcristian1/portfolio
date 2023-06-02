import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { TypeAnimation } from "react-type-animation";
import React from "react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-24 pb-16 justify-center">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-center lg:text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-white text-center">
          MY <span className="text-yellow">TESTIMONIALS</span>
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="font-thin mt-10 text-center">
        <TypeAnimation
          sequence={[
              'See what others are saying about my work.', // Types 'One'
              1300, // Waits 1s
              '',
              () => {
              console.log('Sequence completed'); // Place optional callbacks anywhere in the array
              }
          ]}
          wrapper="span"
          deletionSpeed={90}
          speed={70}
          cursor={true}
          repeat={Infinity}
          className="font-thin text-[18px] md:text-[20px] lg:text-[24px] text-center"
          />
        </p>
      </motion.div>

      <div className="md:flex md:justify-between gap-8 lg:mt-[50px] md:mt-[50px]">
        <motion.div
          className="mx-auto relative border-2 border-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2 before:content-person4 before:mt-[-60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
        <div className="md:mb-[-25px]">
          <p className="mb-[-20px] font-opensans text-6xl">“</p>
          <p className="font-opensans text-center xs:text-[17px] sm:text-[20px] md:text-[18px] lg:text-xl">
          I recently had the pleasure of working with Cristian on a website development project for my physical therapy practice. His skills and knowledge in this area are outstanding.</p>
          <p className="text-[#fdcc49] md:mt-[10px] font-opensans text-center xs:text-[17px] sm:text-[20px] md:text-[16px] lg:text-xl">Natalia Avelar, 2023</p>
        </div>
        </motion.div>

        <motion.div
          className="mx-auto relative border-2 border-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2 before:content-person5 before:mt-[-60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="md:mb-[-15px]">
            <p className="mb-[-20px] font-opensans text-6xl">“</p>
            <p className="font-opensans text-center xs:text-[17px] sm:text-[20px] md:text-[18px] lg:text-xl">
            Cristian was techincal and communicative from start to finish throughout the project. We couldn't be happier with the design and development.</p>
            <p className="text-[#fdcc49] font-opensans md:mt-[10px] text-center xs:text-[17px] sm:text-[20px] md:text-[16px] lg:text-xl">Colibri C.S, 2023</p>
          </div>
          
        </motion.div>

        <motion.div
          className="mx-auto relative border-2 border-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2 before:content-person1 before:mt-[-60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
        <div className="md:mb-[-25px]">
          <p className="mb-[-20px] font-opensans text-6xl">“</p>
          <p className="font-opensans text-center xs:text-[17px] sm:text-[20px] md:text-[18px] lg:text-xl">
          I would rate Cristian very highly, not only for his knowledge, skills, and perseverance but also for his ability to remain calm and methodical under severe pressure.</p>
          <p className="text-[#fdcc49] md:mt-[10px] font-opensans text-center xs:text-[17px] sm:text-[20px] md:text-[16px] lg:text-xl">Ankit Patel, 2022</p>
        </div>
        </motion.div>

        <motion.div> 
          
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials;
