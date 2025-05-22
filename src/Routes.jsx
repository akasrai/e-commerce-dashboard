import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import PageNotFound from './pages/PageNotFound';
import ProductDetail from './pages/ProductDetail';
import DashboardLayout from './layouts/DashboardLayout';

const AppRoutes = () => {
    return (
        <Routes>

            <Route element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productID" element={<ProductDetail />} />
            </Route>

            <Route path="/about" element={<About />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;