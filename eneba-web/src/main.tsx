import { createRoot } from 'react-dom/client'
import Header from "./components/header/Header.tsx"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import './index.css'
import Home from './pages/Home.tsx'
import Results from './pages/Results.tsx'
import NotFound from './pages/NotFound.tsx';

// eslint-disable-next-line react-refresh/only-export-components
const Layout = () => {
  return (
    <div className="font-helvetica text-amber-50">
      <Header />
      <div className="relative bg-[#4618ac] text-primary h-full max-w-270 mx-auto">
        <Outlet />
      </div>
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
        element: <Home />,
      },
      {
        path: "/all",
        element: <Results />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);



createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
