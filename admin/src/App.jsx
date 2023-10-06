import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useReducer,
  useContext,
} from "react";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
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
import CreateNewPass from "./Pages/CreateNewPass";
import Breeding from "./Pages/Breeding";

export const AuthContext = createContext(null);
import SecureStore from "react-secure-storage";
import BreedingData from "./Pages/BreedingData";
import AddBreedPair from "./Pages/AddBreedPair";
import Messages from "./Pages/Messages";

function App() {
  const signIn = useContext(AuthContext);
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
      path: "/createPass",
      element: (
        <div>
          <CreateNewPass />
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
    },
    {
      path: "/breeding",
      element: (
        <div>
          <Breeding />
        </div>
      ),
    },
    {
      path: "/breed-data",
      element: (
        <div>
          <BreedingData />
        </div>
      ),
    },
    {
      path: "/add-breed-pair",
      element: (
        <div>
          <AddBreedPair />
        </div>
      ),
    },
    {
      path: "/messages",
      element: (
        <div>
          <Messages />
        </div>
      ),
    },
  ]);

  //state is not final where to use.
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          console.log("----RESTORE_TOKEN----");
          return {
            ...prevState,
            userToken: action.token,
          };
        case "SIGN_IN":
          console.log("----SIGN_IN----");
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          console.log("----SIGN_OUT----");
          return {
            ...prevState,
            isSignOut: true,
            userToken: null,
          };
      }
    },
    {
      isSignOut: false,
      userToken: null,
    }
  );

  const authContext = useMemo(
    () => ({
      signIn: (data) => {
        SecureStore.setItem("userToken", data);
        dispatch({ type: "SIGN_IN", token: data });
      },
      signOut: () => {
        SecureStore.clear();
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  useEffect(() => {
    console.log("---------START APP USE EFFECT---------");
    let userToken = SecureStore.getItem("userToken");
    dispatch({ type: "RESTORE_TOKEN", token: userToken });
    console.log("---------END APP USE EFFECT---------");
  }, []);

  return (
    // <AuthContext.Provider value={authContext}>
    //   <div className="App">
    //     <BrowserRouter>
    //       <header>
    //         <Routes>
    //           {state.isSignOut ? (
    //             <Route path= "/dashboard" element={<Dashboard/>}/>
    //           ) : (
    //             <Route path= "/" element={<Login/>}/>
    //           )}
    //         </Routes>
    //       </header>
    //     </BrowserRouter>
    //   </div>
    // </AuthContext.Provider>

    <AuthContext.Provider value={authContext}>
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
    </AuthContext.Provider>
  );
}

export default App;
