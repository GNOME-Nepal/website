// This represents one project
import Image from "@/components/Image";
import { fetchContributor } from "@/lib/fetch";
import { useEffect, useState } from "react";
import "@/components/Projects.css";


const Project = ({ project_name, link_to_img, path_to_activate, github_link, contributors = [], ...props }) => {

    const anchorClass = "my-2 mx-3 cursor-pointer";
    const anchorStyle = {
        color: "white"
    };

    const headerClass = "m-3 font-sans text-lg font-bold cursor-default";
    const headerStyle = {
        color: "white"
    };

    const ImgClass = "GNOMEcenter_div GNOMEproject_main_img shadow-lg cursor-default";
    const ImgStyle = {};

    // const contributorsClass = "project_make_pos_rel hide";
    const contributorsClass = "GNOMEproject_make_pos_rel GNOMEcenter_div box-shadow GNOMEIncZIND";
    const contributorsStyle = {
        height: "30rem",
        width: "30rem",
    };

    const ContsPfpClass = " GNOMEconts_pfp m-1";
    const ContsPfpStyle = {
        // display: "inline"
        borderRadius: "50%",
    };

    let [_is_being_hovered_, setState] = useState(false);

    const ContsPfpToLoad = [];
    // console.log(contributors);

    const buttonClass = "ml-2 p-4 GNOMEButtonLinkHover";
    const buttonStyle = {
        border: "1px solid white",
        borderRadius: "2px",
    };

    const IsHovered = () => {

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
        <div {...props} className="GNOMEproject_div_pos">
            <div style={{ width: "100%", height: "100%" }}>
                <Image src={link_to_img} className={ImgClass} style={ImgStyle} />
                <div onMouseOver={hoverCallBack} onMouseLeave={hoverLeft} className={contributorsClass + (_is_being_hovered_ ? " GNOMEupdate_bg" : " GNOMErm_bg GNOMEhide")} style={contributorsStyle}>
                    <h5 className={headerClass} style={headerStyle}>
                        {project_name}
                        <p style={{ width: "0", height: "0" }} className={(_is_being_hovered_ ? " GNOMEunderline-effect" : "")}></p>
                    </h5>
                    <h5>
                        <button className={buttonClass} style={buttonStyle}><a style={anchorStyle} href={github_link} className={anchorClass}>Go to GitHub</a></button>
                        <button className={buttonClass} style={buttonStyle}><a style={anchorStyle} href={path_to_activate} className={anchorClass}>Go to Website</a></button>
                    </h5>
                    <h5 className={headerClass} style={headerStyle}>
                        Contributors
                        <p style={{ width: "0", height: "0" }} className={(_is_being_hovered_ ? " GNOMEunderline-effect" : "")}></p>
                    </h5>
                    <div className="flex flex-row flex-wrap px-4">
                        {contributors.map((ent, ind) => {
                            // const contributor = fetchContributor(ent);
                            // console.log(contributor);
                            return (<Image key={ind} src={fetchContributor(ent).link_to_img} className={ind.toString() + ContsPfpClass + (_is_being_hovered_ ? " GNOMErush_up" : "")} style={ContsPfpStyle} />);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project; 