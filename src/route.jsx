import { Navigate, useRoutes } from "react-router-dom";
import NavFoot from "./layout/NavFoot";
import { Hero, Sponsor, Projects } from "./pages";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <NavFoot />,
      children: [{ path: "", element: <Hero /> }, { path: "/projects", element: <Projects /> }],
    },
    {
      path: "/sponsor",
      element: <Sponsor />
    }
  ]);
}
