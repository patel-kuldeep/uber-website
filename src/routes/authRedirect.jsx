import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthRedirect = ({ children, role }) => {

    let token = null;

    if (role === "captain") {
        token = localStorage.getItem("captainToken");
    } else {
        token = localStorage.getItem("token");
    }

    if (!token) return children;

    try {

        const decoded = jwtDecode(token);
        const now = Date.now();

        // token expired
        if (decoded.exp * 1000 < now) {
            localStorage.removeItem(role === "captain" ? "captainToken" : "token");
            return children;
        }

        // already logged in redirect
        if (role === "captain") {
            return <Navigate to="/captain-dashboard" replace />;
        } else {
            return <Navigate to="/dashboard" replace />;
        }

    } catch (error) {
        console.log(error);
        return children;
    }
};