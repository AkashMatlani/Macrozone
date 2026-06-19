import { globalStyles } from '@/assets/styles/global.styles'
import React from 'react'
import { ScrollView, Text } from 'react-native'

export default function meals() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>All meals</Text>
        </ScrollView>
    )
}