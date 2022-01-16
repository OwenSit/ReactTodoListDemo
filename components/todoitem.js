import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    // <TouchableOpacity onPress={() => pressHandler(item.key)}>
    <View style={styles.item}>
      <MaterialIcons
        style={styles.itemIcon}
        name="delete"
        size={40}
        color="green"
        onPress={() => pressHandler(item.key)}
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
    textAlign: "center",
    flex: 3,
  },
});
