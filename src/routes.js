import Index from "views/Index.js";
import Devices from "./views/Devices";
import Projects from "./views/Projects";
import Regions from "./views/Regions";
import Districts from "./views/Districts";
import Users from "./views/Users";
import Purposes from "./views/Purposes";

let routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/devices",
    name: "Devices",
    icon: "ni ni-planet text-blue",
    component: <Devices />,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "ni ni-planet text-blue",
    component: <Projects />,
    layout: "/admin",
  },
  {
    path: "/regions",
    name: "Regions",
    icon: "ni ni-planet text-blue",
    component: <Regions />,
    layout: "/admin",
  },
  {
    path: "/districts",
    name: "Districts",
    icon: "ni ni-pin-3 text-orange",
    component: <Districts />,
    layout: "/admin",
  },
  {
    path: "/purposes",
    name: "Purposes",
    icon: "ni ni-pin-3 text-orange",
    component: <Purposes />,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-pin-3 text-orange",
    component: <Users />,
    layout: "/admin",
  },
];
export default routes;
