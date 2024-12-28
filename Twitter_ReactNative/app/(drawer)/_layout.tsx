import { withLayoutContext } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigator = createDrawerNavigator().Navigator;
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};
const Drawer = withLayoutContext(DrawerNavigator);
export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
    </Drawer>
  );
}
