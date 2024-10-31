import { Navigate, useRoutes } from "react-router-dom";
import NavFoot from "./layout/NavFoot";
import { Hero,Sponsor } from "./pages";

export default function Router() {
    return useRoutes([
      {
        path: "/",
        element: <NavFoot />,
        children: [{ path: "", element: <Hero /> }],
      },
      {
        path: "/sponsor",
        element: <Sponsor/>
      },
    ]);
}
