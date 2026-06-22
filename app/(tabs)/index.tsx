import { globalStyles } from "@/assets/styles/global.styles";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../component/HomeHeader";
import MacroGird from "../component/MacroGird";
import RecentMeals from "../component/RecentMeals";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGird />
      <RecentMeals/>
    </ScrollView>
  );
}
