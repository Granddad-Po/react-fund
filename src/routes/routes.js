import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
    {path: '/', element: Posts},
    {path: '/posts', element: Posts},
    {path: '/about', element: About},
    {path: '/posts/:id', element: PostIdPage},
]