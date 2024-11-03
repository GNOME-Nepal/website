// This represents one project
import Image from "@/components/Image";
import { fetchContributor } from "@/lib/fetch";
import { forwardRef, useEffect, useState } from "react";
import "@/components/Projects.css";

const Project = forwardRef(({ project_name, link_to_img, path_to_activate, github_link, details_1, details_2, kind, contributors = [], ...props }, ref) => {

    const headerClass = "m-3 font-sans text-lg sm:text-sm GNOMESmallerText font-bold cursor-default";
    const headerStyle = {
        color: "white"
    };

    const linkClass = "";
    const linkStyle = {};

    const projImgClass = " GNOMEProjImg ";
    const projImgStyle = {
        backgroundColor: "grey"
    };

    const commonDivClass = " GNOMEDivSize GNOMEDivCommonProps GNOMEbox-shadow ";

    const mainDivClass = " GNOMEPosRel " + (kind === "COMPLETED" ? " GNOMEMainAnimateCOMPLETED " : (kind === "IN PROGRESS") ? " GNOMEMainAnimateINPROGRESS " : " GNOMEMainAnimateABAN ");
    const mainDivStyle = {
    };

    const detailsClass = " GNOMEDets " + (kind === "COMPLETED" ? " GNOMEDetailsAnimateCOMPLETED " : (kind === "IN PROGRESS") ? " GNOMEDetailsAnimateINPROGRESS " : " GNOMEDetailsAnimateABAN ");
    const detailsStyle = {
    };

    const moreDetailsClass = " GNOMEMoreDets " + (kind === "COMPLETED" ? " GNOMEMoreDetailsAnimateCOMPLETED " : (kind === "IN PROGRESS") ? " GNOMEMoreDetailsAnimateINPROGRESS " : " GNOMEMoreDetailsAnimateABAN ");
    const moreDetailsStyle = {};

    const contributorsClass = " ";
    const contributorsStyle = {
    };

    const contsPfpClass = " GNOMEConts_PFP m-1 ";
    const contsPfpStyle = {
        borderRadius: "50%",
    };

    let [_is_being_hovered_, setState] = useState(false);

    const buttonClass = "ml-2 p-4 GNOMEButtonLinkHover";
    const buttonStyle = {
        border: "1px solid white",
        borderRadius: "2px",
    };

    useEffect(() => {
        // This is necessary to cause re-rendering

        // update the classes and effects based on the state
        // switch (_is_being_hovered_) {
        //     case true:
        //         IsHovered();
        //         break;
        //     case false:
        //         IsNotHovered();
        // }
    }, [_is_being_hovered_]);

    // when the project is hovered over
    const hoverCallBack = () => {
        setState(true);
    };

    const hoverLeft = () => {
        setState(false);
    }

    return (
        <div {...props} ref={ref} className={` GNOMEproject_div_pos `}>
            <div className={commonDivClass + moreDetailsClass} style={moreDetailsStyle}>
                <h3 className={headerClass} style={headerStyle}>More Details</h3>
                <p>
                    {details_2}
                </p>
            </div>
            <div onMouseOver={hoverCallBack} onMouseLeave={hoverLeft} style={mainDivStyle} className={commonDivClass + mainDivClass}>
                <Image src={link_to_img} className={projImgClass + (_is_being_hovered_ ? "" : " ")} style={projImgStyle} />
                <div className={contributorsClass + (_is_being_hovered_ ? " GNOMEContributorClass " : " GNOMEHide")} style={contributorsStyle}>
                    <h5 className={headerClass} style={headerStyle}>
                        {project_name}
                        <p style={{ width: "0", height: "0" }} className={(_is_being_hovered_ ? " GNOMEUnderline-effect" : "")}></p>
                    </h5>
                    <h5>
                        <button className={buttonClass} style={buttonStyle}><a style={linkStyle} href={github_link} className={linkClass}>Go to GitHub</a></button>
                        <button className={buttonClass} style={buttonStyle}><a style={linkStyle} href={path_to_activate} className={linkClass}>Go to Website</a></button>
                    </h5>
                    <h5 className={headerClass} style={headerStyle}>
                        Contributors
                        <p style={{ width: "0", height: "0" }} className={(_is_being_hovered_ ? " GNOMEUnderline-effect" : "")}></p>
                    </h5>
                    <div className="flex flex-row flex-wrap px-4">
                        {contributors.map((ent, ind) => {
                            return (<Image key={ind} src={fetchContributor(ent).link_to_img} className={ind.toString() + contsPfpClass + (_is_being_hovered_ ? " GNOMERush_up " : "")} style={contsPfpStyle} />);
                        })}
                    </div>
                </div>
            </div>
            <div className={commonDivClass + detailsClass} style={detailsStyle}>
                <h3 className={headerClass} style={headerStyle} >Details</h3>
                <p>
                    {details_1}
                </p>
            </div>
        </div>
    );
});

export default Project; 