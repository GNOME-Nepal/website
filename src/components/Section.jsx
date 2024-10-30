import Project from "./Project";
import { Slider } from "./Slider";
// import { HeartIcon } from "lucide-react";

export function Sections({ name, project_names = {} }) {
    const proj_names = Object.keys(project_names);

    const headerClass = "my-3 font-sans text-lg font-bold cursor-default";
    const headerStyle = {

    };

    const sectionClass = "my-2 py 4";
    const sectionStyle = {
        width: "100%",
        height: "100%"
    };

    return (
        <>
            <div className={sectionClass} style={sectionStyle}>
                <h2 style={headerStyle} className={headerClass}>{name}</h2>
                <Slider>
                    {proj_names.map((key, ind) => {
                        return <Project project_name={key} link_to_img={project_names[key].link_to_img} contributors={project_names[key].contributors} path_to_activate={project_names[key].github_link} />
                    })}
                </Slider>
            </div>
        </>
    );
};