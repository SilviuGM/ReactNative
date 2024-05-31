import Register from "../components/Reg"
import { useAuth } from "../hooks/AuthContext"


const RegisterScreen = () => {
    const auth = useAuth()
    return <Register onSubmit={auth.register} />
}

export default RegisterScreen