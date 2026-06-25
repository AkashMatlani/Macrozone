import { globalStyles } from '@/assets/styles/global.styles';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import MealItem from '../component/MealItem';
import { getMeals, Meal } from '../storage/meals';

export default function MealsScreen() {
    const [meals, setMeals] = useState<Meal[]>([]);

    const loadMeals = async () => {
        const data = await getMeals();
        setMeals(data);
    }

    useFocusEffect(
        useCallback(() => {
            loadMeals();
        }, [])
    );

    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>All meals</Text>
            <View style={{ marginTop: 30 }}>

                {meals.length === 0 ? (

                    <Text style={globalStyles.empty}>No Meals logged yet.</Text>
                ) :
                    (
                        meals.map((meal) => (
                            <MealItem
                                key={meal.id}
                                id={meal.id}
                                name={meal.name}
                                calories={meal.calories}
                                protein={meal.protein}
                                crabs={meal.carbs}
                                fat={meal.fat}
                                onDelete={loadMeals}
                            />
                        ))
                    )
                }
            </View>
        </ScrollView>
    )
}