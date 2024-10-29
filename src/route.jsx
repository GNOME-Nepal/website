import { useRoutes } from "react-router-dom";
import NavFoot from "./layout/NavFoot";
import { Hero } from "./pages";
import { Projects } from "./pages/projects";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <NavFoot />,
            children: [{ path: "", element: <Hero /> }, { path: "projects", element: <Projects /> }],
        }
    ]);
}
