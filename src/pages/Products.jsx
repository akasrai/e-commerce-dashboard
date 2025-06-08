import { useNavigate } from "react-router";

import Table from "../components/table/Table";
import useProducts from "../hooks/useProducts";
import { utcToLocal } from "../utils/dateUtils";

const headers = [
    { label: 'Created At', key: 'createdAt' },
    { label: 'Title', key: 'title' },
    { label: 'Thumbnail', key: 'thumbnail' },
    { label: 'Price', key: 'price' },
    { label: 'Category', key: 'category' },
    { label: 'Availability Status', key: 'availabilityStatus' },
    { label: 'Rating', key: 'rating' },
    { label: 'Brand', key: 'brand' }
];

const Products = () => {
    const navigate = useNavigate();
    const { loading, products, error } = useProducts();

    const handleAddProduct = () => {
        navigate('/products/add-product');
    }

    const handleViewProduct = (productId) => {
        navigate(`/products/${productId}`);
    }

    return (
        <div className="">
            <div className="flex ">
                <h1 className="">Products</h1>
                <div className="flex align-items-center">
                    <button className="mr-15" onClick={handleAddProduct} >Add Product</button>
                </div>
            </div>
            <Table headers={headers}>
                {
                    loading && (
                        <tr>
                            <td colSpan="6">Loading...</td>
                        </tr>
                    )

                }
                {
                    error && (
                        <tr>
                            <td colSpan="6" className="error-message">{error}</td>
                        </tr>
                    )

                }
                {
                    products?.length > 0 &&
                    products?.map((product) => (
                        <tr key={product.id} onClick={() => handleViewProduct(product.id)} className="cursor-pointer">
                            <td>{utcToLocal(product.meta.createdAt)}</td>
                            <td>{product.title}</td>
                            <td>
                                <img src={product.thumbnail} alt={product.title} style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>${product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.availabilityStatus}</td>
                            <td>{product.rating}</td>
                            <td>{product.brand}</td>
                        </tr>
                    ))
                }
            </Table>
        </div>
    )
}

export default Products;


/**
 * Local State vs. Global State - Context API, Redux, Zustand
 * Create a global state for user authentication - DONE
 * Create a global state for theme management - Assignment
 * 
 * Create custom hooks for: theme management - useTheme, cart management - useCart
 * 
 * 
 */