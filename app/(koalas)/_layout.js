import { Stack } from "expo-router";
import { COLORS } from "../../styles/constants";

export default function KoalasStack() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "white",

        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTitleStyle: {
          color: COLORS.text,
          fontSize: 20,
        },
        contentStyle: {
          backgroundColor: COLORS.background,
          paddingHorizontal: 20,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Koalas",
        }}
      />
    </Stack>
  );
}
