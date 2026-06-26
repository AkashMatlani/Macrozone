import { colors, globalStyles } from '@/assets/styles/global.styles';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addMeal } from '../storage/meals';

export default function AddMeal() {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [protin, setProtin] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");

    const handleAddMeal = async () => {
        if (!name || !calories) {
            Alert.alert("Error", "Please enter a meal name and calories.");
            return;
        }

        await addMeal({
            name,
            calories: Number(calories),
            protein: Number(protin) || 0,
            carbs: Number(carbs) || 0,
            fat: Number(fat) || 0,
        });

        setName('');
        setCalories('');
        setProtin('');
        setCarbs('');
        setFat('');

        Alert.alert("Success", "Meal added successfully!");
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        router.push('/');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}>Add Meal</Text>
            <TextInput
                style={styles.input}
                placeholder='Meal name'
                placeholderTextColor={colors.textSecondary}
                value={name}
                onChangeText={setName}
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder='Calories'
                placeholderTextColor={colors.textSecondary}
                value={calories}
                onChangeText={setCalories}
            ></TextInput>

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.rowInput]}
                    placeholder='Protein (g)'
                    placeholderTextColor={colors.textSecondary}
                    keyboardType='numeric'
                    value={protin}
                    onChangeText={setProtin}
                />
                <TextInput
                    style={[styles.input, styles.rowInput]}
                    placeholder='Carbs (g)'
                    placeholderTextColor={colors.textSecondary}
                    keyboardType='numeric'
                    value={carbs}
                    onChangeText={setCarbs} />

                <TextInput
                    style={[styles.input, styles.rowInput]}
                    placeholder='Fat (g)'
                    placeholderTextColor={colors.textSecondary}
                    keyboardType='numeric'
                    value={fat}
                    onChangeText={setFat} />
            </View>

            <TouchableOpacity onPress={handleAddMeal}
                style={styles.button}>
                <Text style={styles.buttonText}>Add Meal</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.surface,
        color: colors.text,
        padding: 16,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 16,
    },
    row: {
        flexDirection: 'row',
        gap: 10
    },
    rowInput: {
        flex: 1,
    },
    button: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 24,
    },
    buttonText: {
        color: colors.background,
        fontSize: 16,
        fontWeight: 'bold'
    }
})