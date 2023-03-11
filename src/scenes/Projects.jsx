import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

export const Projects = () => {

  return (
    <section id="projects" className="pt-48 pb-48">
        {/* HEADING HERE */}
        <motion.div
            className="md:w-2/5 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
            >   
                <div>
                    <p className="font-playfair font-semibold text-4xl text-center">
                        <span className="text-lightpurple">PRO</span>JECTS
                    </p>
                </div>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                </div>
                <p className="mt-10 mb-10">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </motion.div>
    </section>
  )
}

export default Projects;