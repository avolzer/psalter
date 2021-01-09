import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import Contents from '../screens/toc'
import About from '../screens/about'
import DrawerHeader from '../shared/drawerHeader'

const Stack = createStackNavigator();
export default function HomeStack( {navigation} ) {
    return (
        
            <Stack.Navigator screenOptions={{
                headerStyle:{backgroundColor:'#ddd'}
            }}>
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        headerLeft: () =>  <DrawerHeader navigation={navigation} />
                    }}
                   
                />
               
            </Stack.Navigator>
        
    );
};