import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

function App() {
  return (
    <div className='container'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
