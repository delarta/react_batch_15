import PostList from "./pages/Example/PostList";
import Home from "./pages/Example/Home";
import UserList from "./pages/Example/UserList";
import UserDetails from "./pages/Example/UserDetails";
import Cursor from "./pages/Example/Cursor";
import MoviesList from "./pages/Example/MoviesList";
import CatFactApp from "./pages/Example/CatFactApp";
import CarExample from "./pages/CarExample/CarExample";
import Todos from "./pages/TodoPage/";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

const routes = [
  {
    path: "/",
    component: Todos,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/signup",
    component: SignUpPage,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/posts",
    component: PostList,
    exact: true,
  },
  {
    path: "/users",
    component: UserList,
    exact: true,
  },
  {
    path: "/users/:id",
    component: UserDetails,
    exact: true,
  },
  {
    path: "/cursor",
    component: Cursor,
    exact: true,
  },
  {
    path: "/movies",
    component: MoviesList,
    exact: true,
  },
  {
    path: "/cat-facts",
    component: CatFactApp,
    exact: true,
  },
  // {
  //   path: "/todos",
  //   component: Todos,
  //   exact: true
  // },
  {
    path: "/car",
    component: CarExample,
    exact: true,
  },
];

export default routes;
