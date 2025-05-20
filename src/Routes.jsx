import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import PageNotFound from './pages/PageNotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;