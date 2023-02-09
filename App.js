import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigation from './navigation/AppNavigation'

export default function App() {
    return <AppNavigation></AppNavigation>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
