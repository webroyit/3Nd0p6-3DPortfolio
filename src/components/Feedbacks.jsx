import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>
                    What others say
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Testimonails.
                </h2>
            </motion.div>
        </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");