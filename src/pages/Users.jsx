import { useNavigate } from "react-router";

import useUsers from "../hooks/useUsers";
import UserCard from "../components/UserCard";

const Users = () => {
    const navigate = useNavigate();
    const { users, loading } = useUsers();

    const handleViewUser = (userId) => {
        navigate(`/users/${userId}`);
    }

    return (
        <div className="">
            <div className="flex mb-20">
                <h1 className="">Users</h1>
            </div>

            {loading && (
                <div className="loading-message">Loading...</div>
            )}

            <div className="grid gap-15 grid-cols-3">
                {
                    users.map((user) => (
                        <div key={user.id} onClick={() => handleViewUser(user.id)} className="cursor-pointer user-card">
                            <UserCard user={user} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Users;