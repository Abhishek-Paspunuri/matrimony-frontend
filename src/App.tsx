import './App.css'
import '../src/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>Page Not Found</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App