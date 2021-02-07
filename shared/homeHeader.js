import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeHeader() {

    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.navigate('Search Bar', {search_term: ''})
    }

    return (
        <View style={{padding: 10}}>
            <EvilIcons name='search' size={28} onPress={pressHandler}/>
        </View>
    );
};