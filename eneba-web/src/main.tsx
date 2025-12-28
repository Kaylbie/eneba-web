import { createRoot } from 'react-dom/client'
import Header from "./components/Header.tsx"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import './index.css'
import App from './App.tsx'

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
        element: <App />,
      },
    ],
  },
]);



createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
