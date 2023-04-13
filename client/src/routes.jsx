import CreateQuotes from "./ui/components/CreateQuotes";
import Home from "./ui/components/Home";
import Login from "./ui/components/Login";
import Profile from "./ui/components/Profile";
import SignUp from "./ui/components/SignUp";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/create",
    element: <CreateQuotes />,
  },
];

export default routes;
