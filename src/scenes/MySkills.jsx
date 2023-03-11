import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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
                <p className="font-playfair fontt-semibold text-4xl mb-5">
                    MY <span className="text-lightpurple">SKILLS</span>
                </p>
            </motion.div>
        </div>
    </section>
  )
}

export default MySkills;