import { globalStyles } from '@/assets/styles/global.styles'
import React from 'react'
import { ScrollView, Text } from 'react-native'

export default function AddMeal() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Add  meals</Text>
        </ScrollView>
    )
}