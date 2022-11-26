import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "../src/Components/Login/Login";
import Register from "../src/Components/Register/Register"
import Main from "./Layout/Main";
import Blog from '../src/Components/Blog/Blog'
import Category from './Components/Category'
import Details from "./Components/Details";
import WishList from "./Components/WishList";
import Order from "./Components/Order";
import AddProduct from "./Components/AddProduct";
import MyProducts from "./Components/MyProducts";
import  { Toaster } from 'react-hot-toast';
import Private from "./Private/Private";
import Catagories from "./Components/Catagories";
import AllSellers from "./Components/AllSellers";
import AllBuyers from "./Components/AllBuyers";
import Report from "./Components/Report";


function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/category/:model", element: <Private><Category></Category></Private> },
        { path: "/categorys", element: <Private><Catagories></Catagories></Private> },
        { path: "/details/:id", element: <Private><Details></Details></Private> },
        { path: "/wish", element: <Private><WishList></WishList></Private> },
        { path: "/order", element: <Private><Order></Order></Private> },
        { path: "/add", element: <AddProduct></AddProduct> },
        { path: "/products", element: <Private><MyProducts></MyProducts></Private> },
        { path: "/allSellers", element: <Private><AllSellers></AllSellers></Private> },
        { path: "/allBuyers", element: <Private><AllBuyers></AllBuyers></Private> },
        { path: "/report", element: <Private><Report></Report></Private> },

      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
