import { NavigationProp, useNavigation } from "@react-navigation/native"
import Lobby from "../components/Lobby"
import { GameRouteNames } from "../routes/RouteNames"
import { useAuth } from "../hooks/AuthContext"

const GameScreen = () => {
    

    const navigation = useNavigation<any>()
    const handleGoToUser = () =>{
        navigation.navigate(GameRouteNames.USER)
    }
    
    
    const auth = useAuth()
    return <Lobby goToUser={handleGoToUser}/> 
};

export default GameScreen;


