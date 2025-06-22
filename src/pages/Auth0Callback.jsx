import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

import useAuth from "../hooks/useAuth";

const Auth0Callback = () => {
    const { login } = useAuth();
    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            console.log("User authenticated:", user);
            const loggedInUser = {
                name: user?.name,
                email: user?.email,
                picture: user?.picture,
                roles: ["ADMIN"],
            }
            toast.success("Login successful");
            login(loggedInUser);
        }
    }, [user, isAuthenticated]);


    return (
        <div>
            {
                isLoading && <h1>Authenticating...</h1>
            }
        </div>
    )
}

export default Auth0Callback;