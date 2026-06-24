import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Meal } from '../storage/meals';
import MacroCard from './MacroCard';

type RecentMealProps = {
    meals: Meal[];
}

export default function MacroGird({ meals }: RecentMealProps) {

    const total = meals.reduce(
        (acc, meal) => ({
            calories: acc.calories + meal.calories,
            protein: acc.protein + meal.protein,
            carbs: acc.carbs + meal.carbs,
            fat: acc.fat + meal.fat,
        }), { calories: 0, protein: 0, carbs: 0, fat: 0 }
    )
    return (
        <View style={styles.grid}>
            <MacroCard
                label='Calories'
                value={`${total.calories}`}
                goal='2000'
                color='#ff6b6b' />
            <MacroCard
                label='Protein'
                value={`${total.protein}g`}
                goal='150g'
                color='#4ecdc4' />
            <MacroCard
                label='Carbs'
                value={`${total.carbs}g`}
                goal='250g'
                color='#ffd93d' />
            <MacroCard
                label='Fat'
                value={`${total.fat}g`}
                goal='65g'
                color='#6bcb77' />
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '12'
    }
});