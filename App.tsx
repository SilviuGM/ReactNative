import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from './src/api';
import { register } from './src/api';
import Register from './src/components/Reg';
import 'react-native-gesture-handler';
import Routes from './src/routes/Index';
import { AuthContextProvider } from './src/hooks/AuthContext';
export default function App() {
  return (
    <AuthContextProvider>
      <Routes/>
    </AuthContextProvider> 
  );
}


