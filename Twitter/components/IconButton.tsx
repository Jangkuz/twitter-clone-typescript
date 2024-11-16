import { View, Text } from "@/components/Themed";
import EvilIcons from "@expo/vector-icons/EvilIcons";

type IconButtonProp = {
  iconName: React.ComponentProps<typeof EvilIcons>["name"];
  numberOfInteraction?: number | string;
};
const IconButton = ({ iconName, numberOfInteraction }: IconButtonProp) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={iconName} size={22} color="black" />
      <Text style={{color: "gray"}}>{numberOfInteraction}</Text>
    </View>
  );
};

export default IconButton