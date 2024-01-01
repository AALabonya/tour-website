import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage";
import RoomsDetails from "../pages/RoomsDetails/RoomsDetails";
import PrivateRoute from "./PrivateRoute";
import { getSingleRoom } from "../api/rooms";
import DashboardLayout from "../layout/DashboardLayout";
import AddRoom from "../components/Dashboard/Host/AddRoom";
import MyListing from "../components/Dashboard/Host/MyListing";
import HostRoute from "./HostRoute";
import ManageUsers from "../components/Dashboard/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import Profile from "../components/Dashboard/Common/Profile";


const Routes =createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/room/:id",
                element:<PrivateRoute><RoomsDetails/></PrivateRoute>,
                loader: ({ params }) => getSingleRoom(params.id),
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signUp",
        element:<Register/>
    },
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"addRoom",
                element:<PrivateRoute><HostRoute><AddRoom/></HostRoute></PrivateRoute>
            },
            {
                path:"my-listing",
                element:<PrivateRoute><HostRoute><MyListing/></HostRoute></PrivateRoute>
            },
            {
                path:'manage-users',
                element:<PrivateRoute><AdminRoute><ManageUsers/></AdminRoute></PrivateRoute>
            },
            {
                path:"profile",
                element:<PrivateRoute><Profile/></PrivateRoute>
            }
        ]
    }
])

export default Routes;