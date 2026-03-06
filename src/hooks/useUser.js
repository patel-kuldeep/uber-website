import { useContext } from "react";
import { UserDataContext } from "../context/user.context";


export const useUser = () => {
    const context = useContext(UserDataContext);

    if (!context) {
        throw new Error("useUser must be used inside UserProvider");
    }

    return context;
};
