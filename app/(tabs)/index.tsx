import { globalStyles } from "@/assets/styles/global.styles";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../component/HomeHeader";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <Link href='/add-meal' style={{fontSize:18, color:"#007bff"}} Go to Add Meals/>
    </ScrollView>
  )
}
