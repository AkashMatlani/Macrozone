import { globalStyles } from "@/assets/styles/global.styles";
import { Text, View } from "react-native";
import HomeHeader from "./component/HomeHeader";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
    </View>
  )
}
