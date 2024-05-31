import { NavigationProp, useNavigation } from "@react-navigation/native"
import Login from "../components/Login"
import { AuthRouteNames } from "../routes/RouteNames"
import { useAuth } from "../hooks/AuthContext"

const LoginScreen = () => {
    const navigation = useNavigation<any>()
    const handleGoToRegister = () => {
        navigation.navigate(AuthRouteNames.REGISTER)
    }
    const auth = useAuth()
    return <Login onSubmit={auth.login} goToRegister={handleGoToRegister}/> 
}

export default LoginScreen