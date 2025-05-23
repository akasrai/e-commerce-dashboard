import { useEffect, useState } from "react"

import { fetchProducts } from "../api/productApi";
import Table from "../components/table/Table";
/**
 * 
 * Products.jsx:25 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
    at Products (Products.jsx:25:31)


 */
const Products = () => {
    const [data, setData] = useState({});

    const getProducts = async () => {
        const data = await fetchProducts();

        setData(data);
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="">
            <h1>Products</h1>

            <Table products={data?.products} />

            {
                Object.keys(data).length === 0
                    ? <div>Loading...</div>
                    : data.products?.map((product) => (
                        <div key={product.id}>{product.title}</div>
                    ))
            }
        </div>
    )
}

export default Products