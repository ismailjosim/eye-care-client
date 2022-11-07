import { createBrowserRouter } from 'react-router-dom';
import UserLogin from '../components/Auth/UserLogin';
import UserSignUp from '../components/Auth/UserSignUp';
import ErrorPage from '../components/ErrorPage/ErrorPage';
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
                path: '/services',
                element: <Services />
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
