import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Sandbox from "./components/sandbox";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addtodo";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (text, key) => {
    Alert.alert("Warning 💀", `Are you sure to delete "${text}"?`, [
      {
        text: "Yes",
        onPress: () => {
          setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.key != key);
          });
        },
      },
      {
        text: "No",
      },
    ]);
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert(
        "OOPS!",
        "Please input a string consists of more than 3 characters.",
        [
          {
            text: "Understood",
            onPress: () => {
              console.log("alart closed");
            },
          },
          {
            text: "Did not Understand",
            onPress: () => {
              console.log("Does not understand.");
            },
          },
        ]
      );
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
