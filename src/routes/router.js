import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/Auth/UserLogin';
import UserSignUp from '../components/Auth/UserSignUp';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import About from '../components/Pages/About/About';
import Blog from '../components/Pages/Blog/Blog';
import Contact from '../components/Pages/Contact/Contact';
import Home from '../components/Pages/Home/Home';
import ServiceDetails from '../components/Pages/Services/ServiceDetails';
import Services from '../components/Pages/Services/Services';
import Review from '../components/User/Review';
import UserServices from '../components/User/UserServices';
import Root from '../layouts/Root';
import PrivateRouter from './PrivateRouter';

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
            },
            {
                path: '/service/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${ params.id }`)
            },
            {
                path: '/addService',
                element: <PrivateRouter><UserServices /></PrivateRouter>
            },
            {
                path: '/review',
                element: <PrivateRouter><Review /></PrivateRouter>
            }
        ]
    }
])

export default router;
