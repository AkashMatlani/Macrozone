import { colors } from '@/assets/styles/global.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { CancelMealReminders, requestPermission, scheduleMealReminder } from '../utills/notifications';

const REMINDER_KEY = 'remindersEnabled';

export default function ReminderToggle() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const load = async () => {
            const val = await AsyncStorage.getItem(REMINDER_KEY);
            setEnabled(val === 'true')
        };
        load();
    }, []);

    const toggle = async (value: boolean) => {
        if (value) {
            const granted = await requestPermission();
            if (!granted) return;
            await scheduleMealReminder();
        }
        else {
            await CancelMealReminders();
        }
        setEnabled(value);
        await AsyncStorage.setItem(REMINDER_KEY, value.toString());
    }

    return (
        <View style={styles.continer}>
            <Text style={styles.label}>Meal Reminders</Text>
            <Switch
                value={enabled}
                onValueChange={toggle}
                trackColor={{ false: colors.surface, true: colors.primary }}
            ></Switch>
        </View>
    );
}

const styles = StyleSheet.create({
    continer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 30,
    },
    label: {
        color: colors.text,
        fontSize: 16,
    }
})