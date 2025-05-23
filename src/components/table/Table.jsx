const Table = (props) => {
    const { products } = props;

    console.log(products);


    
    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Brand</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product 1</td>
                    <td>Image</td>
                    <td>$10</td>
                    <td>Category 1</td>
                    <td>4.5</td>
                    <td>Brand A</td>
                </tr>
                <tr>
                    <td>Product 1</td>
                    <td>Image</td>
                    <td>$10</td>
                    <td>Category 1</td>
                    <td>4.5</td>
                    <td>Brand A</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;