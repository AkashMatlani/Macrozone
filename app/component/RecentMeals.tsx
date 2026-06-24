import { globalStyles } from '@/assets/styles/global.styles'
import React from 'react'
import { Text, View } from 'react-native'
import MealItem from '../component/MealItem'
import { Meal } from '../storage/meals'

type RecentMealProps = {
  meals: Meal[];
}

export default function RecentMeals({ meals }: RecentMealProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>

      {meals.length === 0 ? <Text style={globalStyles.empty}>No meals logged yet.</Text>
        :
        meals.slice(0, 5)
          .map((meal) => (
            <MealItem
              key={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              crabs={meal.carbs}
              fat={meal.fat} />
          ))
      }
    </View>
  )
}