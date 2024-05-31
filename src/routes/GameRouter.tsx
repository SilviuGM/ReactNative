import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GameRouteNames } from './RouteNames';
import { Text } from 'react-native'
import TableScreen from '../screens/GameScreen';
import UserScreen from '../screens/UserScreen'

const GameStack = createNativeStackNavigator()

const gameRoutes = (
    <GameStack.Navigator>
        <GameStack.Screen name={GameRouteNames.TABLE} component={TableScreen} options={{
            headerTitle: (props) => <Text {...props}>Game</Text>
        }}/>
        <GameStack.Screen name={GameRouteNames.USER} component={UserScreen} options={{
            headerTitle: (props) => <Text {...props}>Details</Text>
        }}/>
    </GameStack.Navigator>
)

export default gameRoutes;