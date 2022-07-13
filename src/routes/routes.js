import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/', element: Posts},
    {path: '/posts', element: Posts},
    {path: '/about', element: About},
    {path: '/posts/:id', element: PostIdPage},
]
export const publicRoutes = [
    {path: '/login', element: Login},
    {path: '/about', element: About},
    {path: '/*', element: Login},
]