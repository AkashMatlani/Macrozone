import { globalStyles } from "@/assets/styles/global.styles";
import React from 'react';
import { Text, View } from 'react-native';
export default function HomeHeader() {

    const currentDate = new Date().toLocaleDateString('en-us', {
        weekday: 'long',
        month: 'long',
        day: "numeric"
    });
    return (
        <View style={globalStyles.header}>
            <Text style={globalStyles.date}>{currentDate}</Text>
        </View>
    )
}