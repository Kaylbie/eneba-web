import { createRoot } from 'react-dom/client'
import Header from "./components/header/Header.tsx"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import './index.css'
import Results from './pages/Results.tsx'

// eslint-disable-next-line react-refresh/only-export-components
const Layout = () => {
  return (
    <div className="font-helvetica text-amber-50">
      <Header />
      
      <Outlet />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Results />,
      },
      {
        path:"/all",
        element:<Results/>
      }
    ],
  },
  
]);



createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
