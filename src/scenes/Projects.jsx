import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

// Created the container object to use in the variants attribute of the motion.div containing the 
// projects so the animations will happen for each children one by one with a 0.2 gap in between 
const container = {
  hidden: {},
  visible: {
      transition: {
      staggerChildren: 0.2,
    },
  },
};
  
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Function to reference our project images. Function converts project name from "Project 1" to "project-1" which matches the url in our assets folder for the project screenshot
const Project = ({ title, description, link }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 hover:bg-white transition duration-500
      bg-grey z-30 flex flex-col justify-center text-center p-16 text-black`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
  
    return (
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-2">
            {description}
          </p>
          <button className="mt-2 bg-gradient-rainblue text-deep-blue rounded-sm py-2 px-6 font-semibold
              hover:bg-blue hover:text-white transition duration-500">
            <a href={link}></a>Deploy
          </button>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </motion.div>
    );
  };

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
                <p className="text-center mt-10 mb-10">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        </motion.div>

        {/* PROJECTS HERE */}
        <div className="flex justify-center">
            <motion.div
                className="sm:grid sm:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {/* ROW 1 HERE */}
                <div
                className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    BEAUTIFUL USER INTERFACES
                </div>
                <Project description="A Netflix clone built using Typescript, and Next." link="https://moviesjs.vercel.app/login" title="Project 1" />
                <Project title="Project 2" />

                {/* ROW 2 HERE */}
                <Project title="Project 3" />
                <Project title="Project 4" />
                <Project title="Project 5" />

                {/* ROW 2 HERE */}
                <Project title="Project 6" />
                <div
                className="flex justify-center text-center items-center p-10 bg-purple max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    SMOOTH USER EXPERIENCE
                </div>
            </ motion.div>   

        </div>
    </section>
  )
}

export default Projects;