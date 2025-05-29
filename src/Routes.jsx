import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import PageNotFound from './pages/PageNotFound';
import ProductDetail from './pages/ProductDetail';
import DashboardLayout from './layouts/DashboardLayout';
import WebsiteLayout from './layouts/WebsiteLayout';

const AppRoutes = () => {
    return (
        <Routes>

            <Route element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/add-product" element={<AddProduct />} />
                <Route path="/products/:productID" element={<ProductDetail />} />
            </Route>

            <Route element={<WebsiteLayout />}>
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;