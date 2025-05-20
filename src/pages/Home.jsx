import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-space-available">
                <h1>My Dashboard</h1>
            </div>
        </div>
    )
}

export default Home;

/**
 * Add products /products/add
 * Edit products /products/edit/:id
 * Delete products /products/delete/:id
 * List products /products
 * Filter products
 * Sort products
 * Search products
 * Pagination
 * 
 */
