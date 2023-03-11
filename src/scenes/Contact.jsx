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
                    <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                </p>
                <div className="flex md:justify-end my-5">
                    <LineGradient width="mx-auto w-2/4" />
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
                  <img src="../assets/contact-image.jpeg" alt="contact" />
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
                    action="" 
                    target="_blank" 
                    onSubmit={onSubmit} 
                    method="POST"
                    >
                        <input 
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
                                {errors.name.type === "required" && "This field is required!"}
                                {errors.name.type === "pattern" && "Invalid email address!"}
                            </p>  
                         )}
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;