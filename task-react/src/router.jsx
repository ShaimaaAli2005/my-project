// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CoursesLayout from "./pages/CoursesLayout";
import CoursesList from "./components/CoursesList";
import CourseDetails from "./components/CourseDetails";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "courses",
        element: <CoursesLayout />, 
        children: [
          { index: true, element: <CoursesList /> }, 
          { path: ":courseId", element: <CourseDetails /> }, 
        ],
      },
    ],
  },
  {
    path: "*", 
    element: <NotFound />,
  },
]);