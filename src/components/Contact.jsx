import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                // fadeIn(direction, type, delay, duration)
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={`${styles.sectionSubText}`}>
                    Get in touch
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Contact.
                </h2>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");