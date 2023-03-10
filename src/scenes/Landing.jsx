import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

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
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

        {/* Main Section Here */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
            {/* Headings Here */}
            {/* motion gives us ready to use animations */}
            {/* whileInView represents when you scroll to the section where the div is seen */}
            {/* Viewport is relevant to whileInView, which means the animation will run when you get to this place in the page and it will run only once.  */}
            {/* It also requires the div to show 50% of the div. */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount:0.5}}
              transition={{ duration: 0.5}}
              variants={{
                // Will start -50 from where it originally is located
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0}
              }}
            >
                <p className="text-6xl font-playfair z-10 text-center md:text-start">
                    Cristian {""}
                    <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush1 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">Vargas</span>
                </p>

                <p className="mt-10 mb-7 text-sm text-center md:text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </motion.div>

            {/* Call To Action Here */}
            {/* Delay added to transition to give it a smoother feel */}
            <motion.div
             className="flex mt-5 justify-center md:justify-start"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount:0.5}}
             transition={{ delay: 0.2, duration: 0.5}}
             variants={{
               // Will start -50 from where it originally is located
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0}
             }}
            >
                <AnchorLink
                 className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
                 onClick={() => setSelectedPage("contact")}
                 href="#contact"
                >
                 Contact Me
                </AnchorLink>
                <AnchorLink
                 className="rounded-r-sm bg-gradient-blue py-0.5 pr-0.5"
                 onClick={() => setSelectedPage("contact")}
                 href="#contact"
                >
                 <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
                    Let's talk.
                 </div>
                </AnchorLink>
            </motion.div>

             {/* Delay in this motion.div is a little longer than the contact me and lets talk anchor links above to increase the feel. */}
            <motion.div
             className="flex mt-5 justify-center md:justify-start"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount:0.5}}
             transition={{ delay: 0.4, duration: 0.5}}
             variants={{
               // Will start -50 from where it originally is located
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0}
             }}
            >
             <SocialMediaIcons />
            </motion.div>
        </div>
    </section>
  )
}

export default Landing;