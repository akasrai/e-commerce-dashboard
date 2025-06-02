import { useContext } from 'react';
import { getInitials } from '../utils/stringUtils';
import { AuthenticationContext } from '../components/AuthContext';

const Navbar = () => {

    const { user } = useContext(AuthenticationContext);

    return (
        <div className="navbar w-space-available flex justify-content-right">
            <div className="user-avatar flex align-items-center justify-content-center">
                {
                    getInitials(user?.name)
                }
            </div>
        </div>
    )
}

export default Navbar;