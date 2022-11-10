import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
