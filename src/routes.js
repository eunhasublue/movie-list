import Users from "./pages/Users";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import UserDetail from "./pages/UserDetail";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/movies",
    component: Movies,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/:id",
    component: UserDetail,
  },
];
