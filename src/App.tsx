import './App.css'
import '../src/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>Page Not Found</div>,
      children: [
        {
          path: '/home',
          element: <Home />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App