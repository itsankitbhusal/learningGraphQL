import { Route, Routes } from "react-router-dom";
import Navbar from "./ui/components/Navbar";

import CreateQuotes from "./ui/components/CreateQuotes";
import Home from "./ui/components/Home";
import Login from "./ui/components/Login";
import Profile from "./ui/components/Profile";
import SignUp from "./ui/components/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<CreateQuotes />} />
      </Routes>

      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Profile /> */}
      {/* <CreateQuotes /> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
