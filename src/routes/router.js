import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/Auth/UserLogin';
import UserSignUp from '../components/Auth/UserSignUp';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import About from '../components/Pages/About/About';
import Blog from '../components/Pages/Blog/Blog';
import Contact from '../components/Pages/Contact/Contact';
import Home from '../components/Pages/Home/Home';
import Services from '../components/Pages/Services/Services';
import Root from '../layouts/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <UserLogin />
            },
            {
                path: '/signup',
                element: <UserSignUp />
            }
        ]
    }
])

export default router;
