import DefaultLayout from "../layout/DefaultLayout";
//pages
import Home from "../page/Home";
import MyList from "../page/MyList";
import Search from "../page/Search";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout, name: "Home" },
  {
    path: "/my-list",
    component: MyList,
    layout: DefaultLayout,
    name: "My List",
  },
  { path: "/Search", component: Search, layout: DefaultLayout, name: "Search" },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
