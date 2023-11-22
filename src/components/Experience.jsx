import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>
        </>
    )
}

export default SectionWrapper(Experience, "work");