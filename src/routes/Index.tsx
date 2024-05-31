import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import authRoutes from "./AuthRouter";
import { useAuth } from "../hooks/AuthContext";
import gameRoutes from "./GameRouter";

const Routes: React.FC  = () => {
    const auth = useAuth();
    return (
        <NavigationContainer>
            {auth.token ? gameRoutes : authRoutes}
        </NavigationContainer>
    )
}

export default Routes;