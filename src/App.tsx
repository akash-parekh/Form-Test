// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appRoutes from "@/lib/router"; // now .tsx

const router = createBrowserRouter(appRoutes);

export default function App() {
    return <RouterProvider router={router} />;
}
