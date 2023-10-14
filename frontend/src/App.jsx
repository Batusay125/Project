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
import {
  createContext,
  useMemo,
  useEffect,
  useReducer,
  useContext,
} from "react";
export const AuthContext = createContext(null);
import SecureStore from "react-secure-storage";

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

  const signIn = useContext(AuthContext);

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
    console.log("---------APP USE EFFECT---------");
    let userToken = localStorage.getItem("userToken");
    dispatch({ type: "RESTORE_TOKEN", token: userToken });
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
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
    </AuthContext.Provider>

  );
}

export default App;
