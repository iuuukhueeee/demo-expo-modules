import { Button, View } from "react-native";

import ExpoAppsModule from "@/modules/expo-apps";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Authorize"
        onPress={async () => await ExpoAppsModule.authorizeAsync()}
      />
    </View>
  );
}
