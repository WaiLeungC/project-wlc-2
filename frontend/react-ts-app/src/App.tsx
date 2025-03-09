import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router";
import './App.css'
import FruitList from './components/FruitList';
import RegistrationPage from './components/RegistrationPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FruitList />,
      },
      {
        path: "register",
        element: <RegistrationPage />,
      },
    ],
  },
])

function Layout() {
  return (
    <div>
      <header>
        <h1>Project WLC 2</h1>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/register">
            Register
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default function App() {
  return <RouterProvider router={router} />
}
