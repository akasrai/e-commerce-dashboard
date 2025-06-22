import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";

import Table from "../components/table/Table";
import useProducts from "../hooks/useProducts";
import { utcToLocal } from "../utils/dateUtils";
import withAuthorization from "../hoc/withAuthorization";
import Test from "../components/Test";

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

    const [count, setCount] = useState(1);
    const [page, setPage] = useState(0);

    const { loading, products, error } = useProducts(page);

    const handleAddProduct = () => {
        navigate('/products/add-product');
    }

    const handleViewProduct = (productId) => {
        navigate(`/products/${productId}`);
    }

    const getTotalCount = () => {
        // console.log("Calculating total count");

        return products.length;
    }

    const getTotalCountCached = useCallback(() => {
        // console.log("Calculating total count cached");

        return products.length;
    }, [products]);

    const getTotalPrice = () => {
        // console.log("Calculating total price");

        return products
            .reduce((acc, product) => acc + product.price, 0)
            .toFixed(2);
    }

    const totalPrice = useMemo(() => {
        // console.log("Calculating total price with memoization");

        return products
            .reduce((acc, product) => acc + product.price, 0)
            .toFixed(2);
    }, [products]);

    const prevCallbackRef = useRef();

    useEffect(() => {
        if (prevCallbackRef.current) {
            const isSame = Object.is(prevCallbackRef.current, getTotalCountCached);
            console.log(`🧠 Callback is ${isSame ? 'the same' : 'different'} as last render`);
        } else {
            console.log('🆕 First render, no previous callback to compare');
        }

        prevCallbackRef.current = getTotalCountCached;
    }, [getTotalCountCached]);

    console.log("Product Rendered");

    return (
        <div className="">
            <div className="flex">
                <h1 onClick={() => setCount(count + 1)} className="">Products {count}</h1>
                <div className="flex align-items-center">
                    <button className="mr-15" onClick={handleAddProduct} >Add Product</button>
                </div>

            </div>
            <div className="flex p-20 gap-15">
                <p>Product Count: {getTotalCount()}</p>
                <p>Product Count (Cached): {getTotalCountCached()}</p>
                <p>Total Price: ${getTotalPrice()}</p>
                <p>Total Price (Memoized): ${totalPrice}</p>
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
            <div className="flex gap-15">
                <button onClick={() => setPage(page - 1)}>Prev</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    )
}

export default withAuthorization(Products, "ADMIN");


/**
 * Local State vs. Global State - Context API, Redux, Zustand
 * Create a global state for user authentication - DONE
 * Create a global state for theme management - Assignment
 * 
 * Create custom hooks for: theme management - useTheme, cart management - useCart
 * 
 * 
 * 
 * 
 * https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=openid%20profile%20email&state=41d532e276b31299a889316deda28c68e7b2aafa1a127a04d53d82da7b63d8e064558a73d6a68b06b2b9f2499597b61f3348ee70fa07659acb599d56e92aedb6aa2b7087242afa96b663ff150e91c1befaa9bdb69cecc89d63e3336b171e0d0b237f6cd8b5783d079b5c4a6d5960bb87ae84879b866deb13ec0a8d7fa7ec65c3c9863b904d80fba4232cfa624949d22adc388ae326ea1c1a26deb1866fce0d8a7cc6b7c58c538c889f88ee1be7489e517a86b31000ab45bcf9&response_type=code&client_id=258013614557-nema0dumfbottebi6to7aqi85qot9pvs.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fvercel.com%2Fapi%2Fregistration%2Fgoogle%2Fcallback&service=lso&o2v=2&flowName=GeneralOAuthFlow
 * 
 * 
 * https://vercel.com/api/registration/google/callback&service=lso&o2v=2&flowName=GeneralOAuthFlow
 */