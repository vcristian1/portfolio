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
        <p className="font-playfair font-semibold text-4xl mb-5 text-yellow text-center">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 text-center">
          See what others are saying about my work.
        </p>
      </motion.div>

      <div className="md:flex md:justify-between gap-8">
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
          <p className="mb-[-20px] font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          I would rate Cristian very highly, not only for his knowledge, skills, and perseverance but also for his ability to remain calm and methodical under severe pressure. - Ankit Patel</p>
          
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials;
