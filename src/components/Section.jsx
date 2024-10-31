import Project from "./Project";
import { Slider } from "./Slider";
import "@/components/Projects.css";
// import { HeartIcon } from "lucide-react";

export function Sections({ name, project_names = {} }) {
    const proj_names = Object.keys(project_names);

    const headerClass = "my-3 font-sans text-lg font-bold cursor-default";
    const headerStyle = {
        color: "white"
    };

    const sectionClass = "my-2 p-4 GNOMECave-in";
    const sectionStyle = {
        width: "100%",
        height: "100%",
        backgroundColor: "#7a7f16",
        border: "1px solid white",
        borderRadius: "1rem",
    };

    return (
        <>
            <div className={sectionClass} style={sectionStyle}>
                <h2 style={headerStyle} className={headerClass}>{name}</h2>
                <Slider>
                    {proj_names.map((key, ind) => {
                        return <Project project_name={key} link_to_img={project_names[key].link_to_img} github_link={project_names[key].github_link} contributors={project_names[key].contributors} path_to_activate={project_names[key].site_link} />
                    })}
                </Slider>
            </div>
        </>
    );
};