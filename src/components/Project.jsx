// This represents one project
import Image from "@/components/Image";
import { OddLink } from "./Links";

export default function Project({ project_name, link_to_img, path_to_activate, contributors = [] }) {
    const style = {

    };

    const contStyle = {};

    // when the project is hovered over
    const hoverCallBack = () => {

    };

    return
    (
        <>
            <OddLink to={path_to_activate}>
                <div>
                    <h5>{project_name}</h5>
                    <Image src={link_to_img} className={style} />
                    <div>
                        {contributors.map(([ent, ind]) => {
                            <Image src={ent.link_to_img} className={contStyle} />
                        })}
                    </div>
                </div>
            </OddLink>
        </>
    );
};