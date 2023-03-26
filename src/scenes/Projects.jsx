import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import TechnologyIcons from "../components/TechnologyIcons";

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
const Project = ({ title, description, link, repo }) => {
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
            <a className="bg-gradient-rainbow text-deep-blue rounded-sm py-2 px-5 font-semibold
                hover:bg-blue hover:text-white transition duration-500" target="_blank" rel="no-referrer" href={link} alt={title}>
              Demo
            </a>
            <a className="bg-deep-blue text-white rounded-sm py-2 px-5 font-semibold
                hover:bg-deep-blue hover:text-yellow transition duration-500" target="_blank" rel="no-referrer" href={repo} alt={title}>
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
                <motion.div
                className="flex mt-5 justify-center md:justify-start text-center items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                 hidden: { opacity: 0.5, x: -50 },
                 visible: { opacity: 1, x: 0 },
                }}
                >
                  <TechnologyIcons />
                </motion.div>
        </motion.div>

        {/* PROJECTS HERE */}
        <div className="flex justify-center">
            <motion.div
                className="xs:grid-cols-1 sm:grid sm:grid-cols-3"
                initial="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {/* ROW 1 HERE */}
                <div
                className="flex justify-center text-center items-center p-10 bg-purple max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    BEAUTIFUL USER INTERFACES
                </div>
                <Project repo="https://github.com/vcristian1/codebuddy" description="A ChatGPT AI Web App built using the OpenAI API." link="https://codebuddy-one.vercel.app/" title="Codebuddy" />
                <Project repo="https://github.com/vcristian1/Nextflix-React" description="Netflix clone built using Typescript and Next.js" link="https://moviesjs.vercel.app/login" title="Nextflix" />
                <Project repo="https://github.com/vcristian1/yelpcamp" description="User Review Web App for Campgrounds" link="https://hidden-tor-07938.herokuapp.com/" title="Yelpcamp" />

                {/* ROW 2 HERE */}
                <Project repo="https://highvinehomes.com/active-adult/#/" description="Landing Page for HighVine Homes' 55+ Communities" link="https://highvinehomes.com/active-adult/#/" title="HighVine" />
                <Project repo="https://github.com/vcristian1/WorldView" description="History Web App built using React-Three-Fiber" link="https://my-world-view.herokuapp.com/" title="Worldview" />
                <Project repo="https://github.com/vcristian1/get-weather-api" description="Weather App built using Javascript & Open Weather API" link="https://vcristian1.github.io/get-weather-api/" title="Weather" />

                {/* ROW 2 HERE */}
                <Project repo="https://github.com/vcristian1/next-task" description="Task Management App built using Typescript and Next.js" link="https://next-task-liard.vercel.app/signin" title="Taskify" />
                <div
                className="flex justify-center text-center items-center p-10 bg-yellow max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                    SMOOTH USER EXPERIENCE
                </div>
            </ motion.div>   
        </div>
    </section>
  )
}

export default Projects;