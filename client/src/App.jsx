import { useRoutes } from "react-router-dom";

import Navbar from "./ui/components/Navbar";

import routes from "./routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <Navbar />
      {routing}
    </>
  );
}

export default App;
