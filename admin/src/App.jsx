import {
  createContext,
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
import AddBreedPair from "./Pages/AddBreedPair";
import Request from "./Pages/Request";
import ReviewRequest from "./Pages/ReviewRequest";
import PrivateRoute from "./Pages/PrivateRoute";

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
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>

        </div>
      ),
    },
    {
      path: "/delivery",
      element: (
        <div>
          <PrivateRoute>
            <Delivery />
          </PrivateRoute>

        </div>
      ),
    },
    {
      path: "/rabbitlist",
      element: (
        <div>
          <PrivateRoute>
            <RabbitList />
          </PrivateRoute>

        </div>
      ),
    },
    {
      path: "/add-rabbit",
      element: (
        <div>
          <PrivateRoute>
            <AddRabbit />
          </PrivateRoute>
        </div>
      ),
    },
    {
      path: "/edit-rabbit/:id",
      element: (
        <div>
          <EditRabbit />
          <PrivateRoute>
            <EditRabbit />
          </PrivateRoute>
        </div>
      ),
    },
    {
      path: "/chart",
      element: (
        <div>
          <PrivateRoute>
            <Chart />
          </PrivateRoute>
        </div>
      ),
    },
    {
      path: "/breeding",
      element: (
        <div>
          <PrivateRoute>
            <Breeding />
          </PrivateRoute>
        </div>
      ),
    },
    {
      path: "/add-breed-pair",
      element: (
        <div>
          <PrivateRoute>
            <AddBreedPair />
          </PrivateRoute>
        </div>
      ),
    },
    {
      path: "/request",
      element: (
        <div>
          <PrivateRoute>
            <Request />
          </PrivateRoute>
        </div>
      ),
    },
    {
      path: "/review_request",
      element: (
        <div>
          <PrivateRoute>
            <ReviewRequest />
          </PrivateRoute>
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
