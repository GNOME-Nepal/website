// This represents one project
import Image from "@/components/Image";
import { fetchContributor } from "@/lib/fetch";
import { useEffect, useState } from "react";
import "@/components/Projects.css";


const Project = ({ project_name, link_to_img, path_to_activate, contributors = [], ...props }) => {

    const anchorClass = "my-2 mx-3 project_anchor_pos project_make_pos_rel cursor-default";
    const anchorStyle = {

    };

    const headerClass = "my-3 font-sans text-lg font-bold cursor-default";
    const headerStyle = {};

    const ImgClass = "project_main_img center_div shadow-lg cursor-pointer";
    const ImgStyle = {};

    // const contributorsClass = "project_make_pos_rel hide";
    const contributorsClass = "project_make_pos_rel center_div";
    const contributorsStyle = {
        height: "35rem",
        width: "35rem"
    };

    const ContsPfpClass = " conts_pfp";
    const ContsPfpStyle = {
        // display: "inline"
    };


    let [_is_being_hovered_, setState] = useState(true);

    const ContsPfpToLoad = [];
    // console.log(contributors);
    contributors.map((ent, ind) => {
        // const contributor = fetchContributor(ent);
        // console.log(contributor);
        ContsPfpToLoad.push(<Image key={ind} src={fetchContributor(ent).link_to_img} className={ind.toString() + ContsPfpClass + (_is_being_hovered_ ? " rush_up" : "")} style={ContsPfpStyle} />);
    })

    const IsHovered = () => {
        console.log("Hover");

    };

    const IsNotHovered = () => {
        console.log("no Hover");
    };

    useEffect(() => {
        // update the classes and effects based on the state
        switch (_is_being_hovered_) {
            case true:
                IsHovered();
                break;
            case false:
                IsNotHovered();
        }
    }, [_is_being_hovered_]);

    // when the project is hovered over
    const hoverCallBack = () => {
        setState(true);
    };

    const hoverLeft = () => {
        setState(false);
    }

    return (
        <a style={anchorStyle} href={path_to_activate} className={anchorClass} {...props}>
            <div style={{ width: "100%", height: "100%" }}>
                <Image onMouseOver={hoverCallBack} onMouseLeave={hoverLeft} src={link_to_img} className={ImgClass} style={ImgStyle} />
                <div className={contributorsClass} style={contributorsStyle}>
                    <h5 className={headerClass} style={headerStyle}>{project_name}</h5>
                    <h5 className={headerClass} style={headerStyle}>Contributors</h5>
                    <div className="flex flex-row flex-wrap justify-evenly">
                        {ContsPfpToLoad.map((elem) => { return elem; })}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Project; 