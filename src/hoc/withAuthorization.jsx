import useAuth from "../hooks/useAuth";

const withAuthorization = (WrappedComponent, requiredRole) => () => {
    const { user } = useAuth();

    if (!user.roles.includes(requiredRole)) {
        return <div>You do not have required role to view this page.</div>;
    }

    return <WrappedComponent />;
}

export default withAuthorization;