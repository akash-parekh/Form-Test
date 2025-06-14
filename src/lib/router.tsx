// src/lib/router.ts
import type { RouteObject } from "react-router-dom";
import MainLayout from "@/lib/MainLayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Form from "@/pages/Form/Form";

const appRoutes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "form",
                element: <Form />,
            },
        ],
    },
];

export default appRoutes;
