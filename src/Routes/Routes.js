import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Courses/Courses";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/courses', element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },

        ]
    }
])