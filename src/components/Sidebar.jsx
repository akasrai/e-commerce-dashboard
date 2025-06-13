import { Link } from "react-router";

import useAuth from "../hooks/useAuth";

const Sidebar = () => {

    const { logout } = useAuth()

    return (
        <div className="sidebar">
            <div className="logo p-20">ZARA</div>

            <ul className="menu">
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/products/add-product">Add Products</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li onClick={logout}>
                    <p>Logout</p>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar