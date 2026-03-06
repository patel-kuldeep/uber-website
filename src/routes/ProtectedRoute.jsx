import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const ProtectedRoute = ({ children, allowedRole }) => {
    let token = null;
    // Role wise token
    if (allowedRole === "captain") {
        token = localStorage.getItem("captainToken");
    } else {
        token = localStorage.getItem("token");
    }
    const date = Date.now();
    if (!token) {
        return <Navigate to={allowedRole === "captain" ? "/captain-login" : "/login"} replace />;
    }
    try {
        const decoded = jwtDecode(token);
        // Token expire check
        if (decoded.exp * 1000 < date) {

            if (allowedRole === "captain") {
                localStorage.removeItem("captainToken");
            } else {
                localStorage.removeItem("token");
            }
            return <Navigate to={allowedRole === "captain" ? "/captain-login" : "/login"} replace />;
        }
        // Role validation
        if (allowedRole && decoded.role !== allowedRole) {
            return <Navigate to="/" replace />;
        }
        return children;

    } catch (error) {
        console.log("Token error:", error);
        localStorage.clear();
        return <Navigate to="/login" replace />;
    }
};