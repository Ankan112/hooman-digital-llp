import { createBrowserRouter } from "react-router-dom";
import About from "../Component/About/About";
import Blog from "../Component/Blog/Blog";
import Home from "../Component/Home/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ])
    }
])

export default router;