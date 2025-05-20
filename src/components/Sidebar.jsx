import { Link } from "react-router"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>LOGO</div>

            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar