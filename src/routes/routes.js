import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/Auth/UserLogin';
import UserSignUp from '../components/Auth/UserSignUp';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import About from '../components/Pages/About/About';
import Blog from '../components/Pages/Blog/Blog';
import Contact from '../components/Pages/Contact/Contact';
import Home from '../components/Pages/Home/Home';
import Review from '../components/Pages/Review/Review';
import ServiceDetails from '../components/Pages/Services/ServiceDetails';
import Services from '../components/Pages/Services/Services';
import UserServices from '../components/User/UserServices';
import Root from '../layouts/Root';
import PrivateRouter from './PrivateRouter';

const routes = createBrowserRouter([
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
                loader: ({ params }) => fetch(`https://assignment-11-server-rose.vercel.app/service/${ params.id }`)
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

export default routes;
