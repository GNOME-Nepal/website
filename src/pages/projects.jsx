import { Sections } from "@/components/Section";
import { fetchProject } from "@/lib/fetch";
import { useRef } from "react";

export function Projects() {
    // fetch first
    const style = {
        // height: "120rem",

    };

    const _active_projects_ = useRef({});
    const _in_progress_ = useRef({});
    const _abandoned_ = useRef({});
    _active_projects_.current = fetchProject("COMPLETED");
    _in_progress_.current = fetchProject("IN PROGRESS");
    _abandoned_.current = fetchProject("ABANDONED");
    
    return (
        <>
            <div className="container mx-auto flex flex-col px-8 py-6 my-2" style={style}>
                <Sections name="Completed Projects" kind="COMPLETED"  project_names={_active_projects_.current}/>
                <Sections name="In-Progress Projects" kind="IN PROGRESS" project_names={_in_progress_.current}/>
                <Sections name="Abandoned Projects"kind="ABAN" project_names={_abandoned_.current}/>
            </div>
        </>
    );
};