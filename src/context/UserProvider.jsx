import React, { useState } from "react";
import { UserDataContext } from "./user.context";

const UserProvider = ({ children }) => {
    // STATIC USER DATA
    const [user, setUser] = useState({
        id: "U001",
        firstName: "Kuldeep",
        lastName: "Patel",
        email: "kuldeep@example.com",
        role: "Admin",
        avatar: "https://i.pravatar.cc/150?img=12",
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserProvider;
