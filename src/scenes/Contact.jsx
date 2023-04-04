import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return (
        <section id="contact" className="py-48">
            {/* HEADING HERE */}
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
              <div>
                <p className="font-playfair font-semibold text-4xl mb-5 text-center">
                    <span className="text-yellow">INTERESTED IN WORKING</span> TOGETHER?
                </p>
                <div className="flex md:justify-end my-5">
                    <LineGradient width="mx-auto w-2/4 mb-10" />
                </div>
              </div>
            </motion.div>

            {/* FORM AND IMAGE HERE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                className="basis-1/2 mt-10 md:mt-0 flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                  <img src="../assets/contact-image.png" alt="contact" />
                </motion.div>
                
                <motion.div
                className="basis-1/2 mt-10 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <form 
                    action="https://formsubmit.co/09821b6ccaa4f7a4347fa2a6712cb014" 
                    target="_blank" 
                    onSubmit={onSubmit} 
                    method="POST"
                    >
                        <input 
                        name="name"
                        className="w-full bg-blue font-semibold placeholder-opaque-black p-3" 
                        type="text" 
                        placeholder="NAME"
                        // Telling React Hook Form I am Registering this particular input inside of it, and its called name with validation
                        {...register("name", {
                            required: true, 
                            maxLength: 100,
                        })}
                         />
                         {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === "required" && "This field is required!"}
                                {errors.name.type === "max length" && "Max length is 100 characters!"}
                            </p>  
                         )}

                         <input
                         name="email"  
                         className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" 
                         type="text" 
                         placeholder="EMAIL"
                         // Telling React Hook Form I am Registering this particular input inside of it, and its called name with validation
                         {...register("email", {
                             required: true, 
                             // Regex to validate email 
                             pattern: /^[A-Z-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                         })}
                         />
                         {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === "required" && "This field is required!"}
                                {errors.email.type === "pattern" && "Invalid email address!"}
                            </p>  
                         )}

                        <textarea 
                         name="message" 
                         className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" 
                         type="text" 
                         placeholder="MESSAGE"
                         rows="4"
                         cols="50"
                         // Telling React Hook Form I am Registering this particular input inside of it, and its called name with validation
                         {...register("message", {
                             required: true, 
                             maxLength: 2000,
                         })}
                         />
                         {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === "required" && "This field is required!"}
                                {errors.message.type === "max length" && "Max length is 2000 characters!"}
                            </p>  
                         )}
                         <div className="justify-center items-center">
                             <button type="submit" className="p-5 rounded bg-gradient-rainbow font-semibold text-deep-blue mt-5 hover:bg-gradient-rainbow hover:text-white items-center transition duration-500">Send Message</button>
                         </div>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;