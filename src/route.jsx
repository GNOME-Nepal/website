import { useRoutes } from "react-router-dom";
import NavFoot from "./layout/NavFoot";
import { Hero, Sponsor } from "./pages";
import NotFound from "./pages/NotFound";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <NavFoot />,
      children: [{ path: "", element: <Hero /> }],
    },
    {
      path: "/sponsor",
      element: <Sponsor />,
    },
    {
      path: "*", // Catch-all route for unmatched paths
      element: <NotFound />,
    },
  ]);
}
