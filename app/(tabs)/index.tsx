import { globalStyles } from "@/assets/styles/global.styles";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../component/HomeHeader";
import MacroGird from "../component/MacroGird";
import RecentMeals from "../component/RecentMeals";
import { getMeals, Meal } from "../storage/meals";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data)
  }

  useFocusEffect(
    useCallback(() => {
      loadMeals()
    }, []),
  )
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGird  meals={meals} />
      <RecentMeals meals={meals}  onDelete={loadMeals}/>
    </ScrollView>
  );
}
