import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const storedSession = localStorage.getItem("auth_session");

    if (!storedSession) {
        return <Navigate to="/login" replace />;
    }

    const session = JSON.parse(storedSession);

    if (!session.accessToken) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;