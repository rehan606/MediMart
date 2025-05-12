
import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Pages/HomePage/Home";
import Login from "../Components/Pages/Authentication/Login";
import Register from "../Components/Pages/Authentication/Register";
import Dashboard from './../Components/Pages/Dashboard/Dashboard';
import PrivetRoute from '../Routes/PrivetRoute';
import Users from "../Components/Pages/Dashboard/Users";
import AddMedicine from "../Components/Pages/Dashboard/Seller/AddMedicine";
import ErrorPage from "../Components/Pages/SharedPages/ErrorPage";
import Shop from "../Components/Pages/InnerPages/Shop";
import MedicineDetails from "../Components/Pages/InnerPages/MedicineDetails";
import Cart from "../Components/Pages/InnerPages/Cart";
import Payment from "../Components/Pages/Dashboard/Payment";
import PaymentHistory from "../Components/Pages/Dashboard/PaymentHistory";
import Invoice from "../Components/Pages/Dashboard/Invoice";
import PaymentManagement from "../Components/Pages/Dashboard/PaymentManagement";
import ManageCategory from "../Components/Pages/Dashboard/ManageCategory";
import MyMedicine from "../Components/Pages/Dashboard/Seller/MyMedicine";
import AdminHome from "../Components/Pages/Dashboard/AdminHome";
import TabletCategory from "../Components/Pages/InnerPages/CategoryPage/TabletCategory";
import Capsul from "../Components/Pages/InnerPages/CategoryPage/Capsul";
import Syrap from "../Components/Pages/InnerPages/CategoryPage/Syrap";
import Injection from "../Components/Pages/InnerPages/CategoryPage/Injection";
import Suspension from "../Components/Pages/InnerPages/CategoryPage/Suspension";
import Others from "../Components/Pages/InnerPages/CategoryPage/Others";
import UpdateProfile from "../Components/Pages/Dashboard/UpdateProfile";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'shop',
        element: <Shop></Shop>
    },
    
    {
        path: '/medicineDetails/:id',
        element: <MedicineDetails></MedicineDetails>
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    // category 
    {
        path: 'tablet',
        element: <TabletCategory></TabletCategory>
    },
    {
        path: 'capsul',
        element: <Capsul></Capsul>
    },
    {
        path: 'syrap',
        element: <Syrap></Syrap>
    },
    {
        path: 'injection',
        element: <Injection></Injection>
    },
    {
        path: 'suspension',
        element: <Suspension></Suspension>
    },
    {
        path: 'others',
        element: <Others></Others>
    },
    {
        path: 'updateProfile',
        element: <UpdateProfile></UpdateProfile>
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            {
                index: true,
                element: <PrivetRoute> <AdminHome></AdminHome> </PrivetRoute>
            },
            {
                path: 'manageUser',
                element: <PrivetRoute> <Users></Users> </PrivetRoute>
            },
            {
                path: 'paymentManagement',
                element: <PrivetRoute> <PaymentManagement></PaymentManagement> </PrivetRoute>
            },
            {
                path: 'manageCategory',
                element: <PrivetRoute> <ManageCategory></ManageCategory> </PrivetRoute>
            },

            // Seller 
            {
                path: 'addMedicine',
                element: <AddMedicine></AddMedicine>
            },
            {
                path: 'myMedicine',
                element: <MyMedicine></MyMedicine>
            },
            // USer
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'invoice',
                element: <Invoice></Invoice>
            },
        ]
    },
    

]);