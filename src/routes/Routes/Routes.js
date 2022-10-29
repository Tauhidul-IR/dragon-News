import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Home from '../../Pages/Home/Home'
import Login from "../../Pages/SignIn/Login/Login";
import Register from "../../Pages/SignIn/Register/Register";
import News from "../../Pages/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition/TermsAndCondition";
import Profile from "../../Pages/Others/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch(`http://localhost:5000/news`)
                loader: () => fetch(`https://dragon-news-server-woad-one.vercel.app/news`)

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-woad-one.vercel.app/category/${params.id}`)
                // loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-woad-one.vercel.app/news/${params.id}`)
                // loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
]) 