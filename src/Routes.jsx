import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import AuthLayout from './layouts/AuthLayout';
import PageNotFound from './pages/PageNotFound';
import ProductDetail from './pages/ProductDetail';
import WebsiteLayout from './layouts/WebsiteLayout';
import DashboardLayout from './layouts/DashboardLayout';
import UserDetail from './pages/UserDetail';
import Auth0Callback from './pages/Auth0Callback';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/add-product" element={<AddProduct />} />
                <Route path="/products/:productID" element={<ProductDetail />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userID" element={<UserDetail />} />
            </Route>

            <Route element={<WebsiteLayout />}>
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth0/callback" element={<Auth0Callback />} />
            </Route>


            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;
