import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Category from "./pages/Category";
import Vendor from "./pages/Vendor";
import AdminPanel from "./pages/AdminPanel";
import ManageProducts from "./pages/ManageProduct";
import ManageVendors from "./pages/ManageVendor";
import ManageUsers from "./pages/ManageUser";
import ProteinsPage from "./pages/Proteins";
import GainersPage from "./pages/Gainers";
import PrePostWorkoutPage from "./pages/PrePostWorkout";
import AyurvedaPage from "./pages/Ayurveda";
import FitFoodsPage from "./pages/FitFoodsPage";
import VitaminsPage from "./pages/VitaminsPage";
import FatLossPage from "./pages/FatLoss";
import AccessoriesPage from "./pages/Accessories";
import AdminLogin from "./pages/AdminLogin";
import ProductPage from "./pages/ProductPage";
function App() {
  
  return (
    <div className="container">
     <Routes>
      <Route index element={<Login/>}/>
      <Route path="/signup" element={<Signin/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/vendorpanel" element={<Vendor/>}/>
      <Route path="/adminpanel" element={<AdminPanel/>}/>
      <Route path="/manage-product" element={<ManageProducts/>}/>
      <Route path="/manage-vendor" element={<ManageVendors/>}/>
      <Route path="/manage-user" element={<ManageUsers/>}/>
      <Route path="/proteins" element={<ProteinsPage/>}/>
      <Route path="/gainers" element={<GainersPage/>}/>
      <Route path='/pre-post-workout' element={<PrePostWorkoutPage/>}/>
      <Route path="/ayurveda" element={<AyurvedaPage/>}/>
      <Route path="/fit-foods" element={<FitFoodsPage/>}/>
      <Route path="/vitamin" element={<VitaminsPage/>}/>
      <Route path="/fat-loss" element={<FatLossPage/>}/>
      <Route path="/accessories" element={<AccessoriesPage/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/product" element={<ProductPage/>}/>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
