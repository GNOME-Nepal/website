import Project from "./Project";
import "@/components/Projects.css";
import { useEffect, useState } from "react";
import "@/components/Projects.css";

export function Sections({ name, kind, project_names = {} }) {
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

    const [currentActive, setCurrentActive] = useState(0);

    useEffect(() => {
        if (proj_names.length > 1) {
            const intervalId = setInterval(() => {
                setCurrentActive((prevActive) => (prevActive + 1) % proj_names.length);
            }, 15000);

            return () => clearInterval(intervalId);
        } else if (proj_names.length === 1) {
            const intervalId = setInterval(() => {
                setCurrentActive((prevActive) => (prevActive == 0 ? 1 : 0));
            }, 15000);
            console.log("Hello");
            return () => clearInterval(intervalId);
        }
    }, [proj_names.length]);

    const getChild = () => {
        const contributor = project_names[proj_names[proj_names.length > 1 ? currentActive : 0]];
        const key = proj_names[currentActive];
        return (
            <div key={currentActive}>
                <Project
                    kind={kind}
                    project_name={key}
                    link_to_img={contributor.link_to_img}
                    github_link={contributor.github_link}
                    contributors={contributor.contributors}
                    path_to_activate={contributor.site_link}
                    details_1={contributor.details}
                    details_2={contributor.more_details}
                />
            </div>
        );
    }

    return (
        <>
            <div className={sectionClass} style={sectionStyle}>
                <h2 style={headerStyle} className={headerClass}>{name}</h2>
                {getChild()}
            </div>
        </>
    );
};