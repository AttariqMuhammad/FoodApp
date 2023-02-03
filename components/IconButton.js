import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";

function IconButton({ onPress, name, color, size }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} color={color} size={24} />
    </Pressable>
  );
}

export default IconButton;
