import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicLayout } from './layouts';
import { NotificationContext } from './contexts';
import { HomePage } from './pages';

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
      ],
    },
  ]);

  return (
    <NotificationContext>
      <RouterProvider router={router} />
    </NotificationContext>
  );
}

export default App;