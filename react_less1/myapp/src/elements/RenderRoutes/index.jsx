import { lazy } from "react";
import Error from "../../components/Error";

const Content = lazy(
  async () => await import("../../components/Content/Content")
);

const LoginPage = lazy(async () => await import("../../components/LoginPage"));

const Register = lazy(async () => await import("../../components/Register"));

const routes = [
  {
    path: "/",
    component: Content,
    exact: true,
  },
  {
    path: ":language/",
    component: Content,
    exact: true,
  },

  {
    path: "/:language/menu",
    component: Content,
    exact: true,
  },
  {
    path: "/:language/menu/:title",
    component: Content,
    exact: true,
  },

  {
    path: "/:language/login",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/:language/register",
    component: Register,
    exact: true,
  },
  {
    path: "*",
    component: Error,
  },
];

export default routes;
