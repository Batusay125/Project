import { createContext, useState, useMemo, useEffect, useReducer } from "react";
import "./App.css";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Delivery from "./Pages/Delivery";
import RabbitList from "./Pages/RabbitList.jsx";
import Login from "./Pages/Login";
import AddRabbit from "./Pages/AddRabbit";
import Register from "./Pages/Register";
import EditRabbit from "./Pages/EditRabbit.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chart from "./Pages/Chart";
export const AuthContext = createContext();
import * as UserController from './controller/UserController'


function App() {

  const [signIn, setSignIn] = useState(null);

  console.log(signIn);
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
      path: "/add-rabbit",
      element: (
        <div>
          <AddRabbit />
        </div>
      ),
    },
    {
      path: "/edit-rabbit/:id",
      element: (
        <div>
          <EditRabbit />
        </div>
      ),
    },
    {
      path: "/chart",
      element: (
        <div>
          <Chart />
        </div>
      ),
    }
  ]);

  // const [state, dispatch] = useReducer((prevState, action) => {
  //   console.log("appppp use reducer");
  //   switch (action.type) {
  //     case "RESTORE_TOKEN":
  //       console.log("RESTORE_TOKEN");
  //       return {
  //         ...prevState,
  //         isSignOut: true,
  //         userToken: action.token
  //       };
  //     case "SIGN_IN":
  //       return {
  //         ...prevState,
  //         isSignOut: false,
  //         userToken: null
  //       };
  //     case "SIGN_OUT":
  //       return {
  //         ...prevState,
  //         isSignOut: true,
  //         userToken: null
  //       }
  //   }
  // }, {
  //   isSignOut: false,
  //   userToken: null
  // }
  // );
  // useMemo(
  //   () => ({
  //     signIn: (data) => {
  //       console.log("signinnnnnnnnn");
  //       dispatch({ type: "SIGN_IN", token: data.token })
  //     },
  //     signOut: () => {
  //       console.log("signoutttttt");
  //       // UserController.clear();
  //       dispatch({ type: "SIGN_OUT" })
  //     }
  //   }), []);

  // useEffect(() => {
  //   console.log("appppp use effect");
  //   const userToken = "tokennnnnnnnnnnnnnnnnnnnnnn";
  //   dispatch({ type: "RESTORE_TOKEN", token: userToken });
  // }, []);

  return (
    <AuthContext.Provider value={[signIn, setSignIn]}>
      <div className="App">
        
        {/* <BrowserRouter>
          <header>
            <Routes>
           
              {state.isSignOut ? (
              <Route path= "/" element={<Login/>}/>
              ) : (
                
                <Route path= "/dashboard" element={<Dashboard/>}/>
              )}

              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />

            </Routes>
          </header>
        </BrowserRouter> */}

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
    </AuthContext.Provider>
  );
}

export default App;
