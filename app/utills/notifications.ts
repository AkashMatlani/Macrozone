import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
        shouldShowList: true,
        shouldShowAlert: true
    })
});

export const requestPermission = async (): Promise<boolean> => {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === "granted";
}

export const scheduleMealReminder = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "MacroZone",
            body: "Don't forget to log your lunch!"
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: 12,
            minute: 0,
        }
    });

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "MacroZone",
            body: "Don't forget to log your dinner!"
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: 12,
            minute: 0,
        }
    });
};

export const CancelMealReminders = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
};