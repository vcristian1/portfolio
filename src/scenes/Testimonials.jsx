import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

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
        <p className="font-opensans mt-10 text-center">
          See what others are saying about my work.
        </p>
      </motion.div>

      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-purple max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[100px] before:left-1/2 before:content-person2 before:mt-[-60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="mb-[-20px] font-opensans text-6xl">“</p>
          <p className="font-opensans text-center xs:text-[17px] sm:text-[20px] md:text-xl lg:text-xl">
          Cristian was techincal and communicative from start to finish throughout the project. We couldn't be happier with the design and development. - <span className="text-[#fdcc49] font-bold">Colibri Construction Services</span></p>
          
        </motion.div>

        <motion.div
          className="mx-auto relative bg-purple max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
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
          <p className="mb-[-20px] font-opensans text-6xl">“</p>
          <p className="font-opensans text-center xs:text-[17px] sm:text-[20px] md:text-xl lg:text-xl">
          I would rate Cristian very highly, not only for his knowledge, skills, and perseverance but also for his ability to remain calm and methodical under severe pressure. - <span className="text-[#fdcc49] font-bold">Ankit Patel</span></p>
          
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials;
