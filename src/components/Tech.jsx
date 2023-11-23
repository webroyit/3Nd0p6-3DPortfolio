import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <p>{technology.name}</p>
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");