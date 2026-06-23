import { globalStyles } from '@/assets/styles/global.styles'
import React from 'react'
import { Text, View } from 'react-native'
import MealItem from '../component/MealItem'

export default function RecentMeals() {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      <MealItem name='Chicken & Rice'
        calories={540}
        protein={45}
        crabs={50}
        fat={12} />
      <MealItem name='Protein Shake'
        calories={280}
        protein={30}
        crabs={20}
        fat={8} />
      <MealItem name='Salmon Salad'
        calories={430}
        protein={35}
        crabs={10}
        fat={25} />
    </View>
  )
}