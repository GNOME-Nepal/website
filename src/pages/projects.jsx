import { Sections } from "@/components/Section";
import { fetchProject } from "@/lib/fetch";
import { useRef } from "react";

export function Projects() {
    // fetch first
    const style = {
        // height: "120rem",

    };

    const _active_projects_ = useRef({});
    _active_projects_.current = fetchProject("COMPLETED");
    
    return (
        <>
            <div className="container mx-auto flex flex-col px-8 py-6 my-2" style={style}>
                <Sections name="Active Projects" project_names={_active_projects_.current}/>
            </div>
        </>
    );
};