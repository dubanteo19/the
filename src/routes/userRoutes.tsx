import { UserLayout } from "@/layout/UserLayout";
import { HomePage } from "@/page/HomePage";
import { type RouteObject } from "react-router-dom";

export const userRoutes: RouteObject = {
  path: "/",
  element: <UserLayout />,
  children: [
    { index: true, element: <HomePage /> },
  ],
};
