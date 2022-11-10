import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

import './styles/App.css';

function App() {
  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  );
}

export default App;
