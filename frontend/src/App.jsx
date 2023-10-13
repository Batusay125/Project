import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Adopt from "./pages/Adopt.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import MyApplication from "./pages/MyApplication.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AdoptForm from "./pages/AdoptForm.jsx";
import RabbitData from "./pages/RabbitData.jsx";
import AddRabbit from "./pages/AddRabbit.jsx";
import AboutRabbit from "./pages/AboutRabbit.jsx";
import NewForm from "./pages/NewForm.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Login />
        </div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div>
          <Signup />
        </div>
      ),
    },
    {
      path: "/home",
      element: (
        <div>
          <Home />
        </div>
      ),
    },
    {
      path: "/adopt",
      element: (
        <div>
          <Adopt />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Contact />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <About />
        </div>
      ),
    },
    {
      path: "/myapplication",
      element: (
        <div>
          <MyApplication />
        </div>
      ),
    },
    {
      path: "/rabbitdata/:name/:id/adopt-form",
      element: (
        <div>
          <AdoptForm />
        </div>
      ),
    },
    {
      path: "/newform",
      element: (
        <div>
          <NewForm />
        </div>
      ),
    },
    {
      path: "/rabbitdata/:id",
      element: (
        <div>
          <RabbitData />
        </div>
      ),
    },
    {
      path: "/addrabbit",
      element: (
        <div>
          <AddRabbit />
        </div>
      ),
    },
    {
      path: "/adopt/:id",
      element: (
        <div>
          <AboutRabbit />
        </div>
      ),
    },
  ]);
  return (
    <div className="app">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      ></ToastContainer>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
