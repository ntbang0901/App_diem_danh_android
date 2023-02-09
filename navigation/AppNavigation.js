import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import ClassManager from '../screens/ClassManager'
import LoginScreen from '../screens/LoginScreen'
import SubjectManager from '../screens/SubjectManager'
import StudentsManager from '../screens/StudentsManager'
import TKBManager from '../screens/TKBManager'

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                options={{
                    headerShown: false
                }}
                component={LoginScreen}
            />
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Product'
                options={{
                    headerTitle: 'Quản lý lớp'
                }}
                component={ClassManager}
            />
            <Stack.Screen
                name='Subject'
                options={{
                    headerTitle: 'Lịch học'
                }}
                component={SubjectManager}
            />
            <Stack.Screen
                name='Students'
                options={{
                    headerTitle: 'Danh sách điểm danh'
                }}
                component={StudentsManager}
            />
            <Stack.Screen
                name='tkbManager'
                options={{
                    headerTitle: 'Lịch'
                }}
                component={TKBManager}
            />
        </Stack.Navigator>
    )
}

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <MyStack></MyStack>
        </NavigationContainer>
    )
}

export default AppNavigation
