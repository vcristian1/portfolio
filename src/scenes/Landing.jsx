import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin  } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';


const Landing = ({setSelectedPage}) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");


  return (
    // This is the ID that the home AnchorLink is using to navigate.
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image3.svg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image3.jpeg"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="md:mb-[50px] mb-[50px] text-6xl font-playfair z-10 text-center md:text-start lg:text-start">
            Cristian {""}
            <span
              className="xs:relative text-yellow xs:font-semibold z-20 md:z-20 "
            >
              Vargas
            </span>
          </p>
          <div className="">
            <p
              className="font-thin text-[18px] md:text-[20px] lg:text-[24px] xs:text-center md:text-left">
              Hi, I’m a Business Analyst and JavaScript/TypeScript developer based in Chicago, IL. I specialize in building and maintaining software applications, bridging the gap between business needs and technical solutions at Accenture.
              </p>
          </div>

        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex justify-center md:justify-start md:mt-[50px] mt-[50px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 lg:text-[18px]"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Lets Talk
          </AnchorLink>
          <a 
            className="rounded-r-sm bg-blue py-0.5 pr-0.5"
            href="https://drive.google.com/file/d/18PI8vdR-4kdyyOPA1O8LrIzvhpUW1Yt2/view?usp=sharing"
            rel="noreferrrer"
            target="_blank"
          >
            <div className="bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center px-10 lg:text-[18px]">
              Resume
            </div>
          </a>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start gap-[25px] md:gap-[50px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a href="https://www.linkedin.com/in/cristian-c-vargas-13686a1a3/" target="_blank" rel="noreferrer">
            <AiOutlineLinkedin className="mt-10 hover:opacity-50 transition duration-500 h-12 w-12 md:h-12 md:w-12"/>
          </a>
          <a href="https://www.github.com/vcristian1" target="_blank" rel="noreferrer">
            <AiOutlineGithub className="mt-10 hover:opacity-50 transition duration-500 h-12 w-12 md:h-12 md:w-12"/>
          </a>
          
        </motion.div>
      </div>
    </section>
  )
}

export default Landing;