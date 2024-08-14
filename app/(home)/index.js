import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";

export default function HomePage() {
  return (
    <View>
      <Text style={globalStyles.paragraph}>
        Welcome to KoalaLaughs – your cozy corner for all things koala! Here,
        you'll find the funniest koala jokes and the most adorable koala images
        to brighten your day. Whether you're in need of a quick chuckle or
        simply want to enjoy some cute koala photos, we've got you covered. Dive
        in, relax, and let the koalas bring a smile to your face! 🐨😊
      </Text>
    </View>
  );
}
