import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Delivery from "./Pages/Delivery";
import RabbitList from "./Pages/RabbitList.jsx";
import Login from "./Pages/Login";
import AddRabbit from "./Pages/AddRabbit";
import Register from "./Pages/Register";
import EditRabbit from "./Pages/EditRabbit.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      path: "/register",
      element: (
        <div>
          <Register />
        </div>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <div>
          <Dashboard />
        </div>
      ),
    },
    {
      path: "/delivery",
      element: (
        <div>
          <Delivery />
        </div>
      ),
    },
    {
      path: "/rabbitlist",
      element: (
        <div>
          <RabbitList />
        </div>
      ),
    },
    {
      path: "/addRabbit",
      element: (
        <div>
          <AddRabbit />
        </div>
      ),
    },
    {
      path: "/edit/:id",
      element: (
        <div>
          <EditRabbit />
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2500}
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
