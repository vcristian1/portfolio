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
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 hover:bg-white transition duration-500
      bg-grey z-30 flex flex-col justify-center text-center p-16 text-black`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
  
    return (
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="xsm:text-sm text-2xl font-semibold font-playfair">{title}</p>
          <p className="xsm:text-sm mt-2">
            {description}
          </p>
          <div className="flex justify-center text-center items-center">
            <a className="bg-gradient-rainbow text-deep-blue rounded-sm py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition duration-500" target="_blank" rel="no-referrer" href={link} alt={title}>
              Demo
            </a>
            <a className="bg-deep-blue text-white rounded-sm py-3 px-7 font-semibold
                hover:bg-deep-blue hover:text-yellow transition duration-500" target="_blank" rel="no-referrer" href={link} alt={title}>
              Repo
            </a>
          </div>
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
                        <span className="text-yellow">SOME</span> THINGS I'VE BUILT
                    </p>
                </div>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                </div>
                <p className="text-center mt-10 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                <Project description="Netflix clone built using Typescript and Next.js" link="https://moviesjs.vercel.app/login" title="Nextflix" />
                <Project description="User Review Web App for Campgrounds" link="https://hidden-tor-07938.herokuapp.com/" title="Yelpcamp" />

                {/* ROW 2 HERE */}
                <Project description="Landing Page for HighVine Homes' 55+ Communities" link="https://highvinehomes.com/active-adult/#/" title="HighVine" />
                <Project description="History Web App built using React-Three-Fiber" link="https://my-world-view.herokuapp.com/" title="Worldview" />
                <Project description="Weather App built using Javascript & Open Weather API" link="https://vcristian1.github.io/get-weather-api/" title="Weather" />

                {/* ROW 2 HERE */}
                <Project description="Task Management App built using Typescript and Next.js" link="https://next-task-liard.vercel.app/signin" title="Taskify" />
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