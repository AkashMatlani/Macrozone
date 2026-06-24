import { StyleSheet, Text, View } from "react-native";

type MacroCardProps = {
    label: string;
    value: string;
    goal: string;
    color: string;
};

export default function MacroCard({
    label,
    value,
    goal,
    color,
}: MacroCardProps) {
    return (
        <View style={[style.card, { borderLeftColor: color }]}>
            <Text style={style.label}>{label}</Text>
            <Text style={style.value}>{value}</Text>
            <Text style={style.goal}>/ {goal}</Text>
        </View>

    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "#16213e",
        borderRadius: 12,
        padding: 16,
        width: '47%',
        borderLeftWidth: 4,
    },
    label: {
        fontSize: 14,
        color: "#a0a0b0"
    },
    value: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#ffffff",
        marginTop: 4,
    },
    goal: {
        fontSize: 14,
        color: "#a0a0b0",
        marginTop: 2,
    }
})