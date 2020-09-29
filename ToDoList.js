import React, { useContext } from "react";
import { TodosContext } from "./App";
import { SwipeListView } from "react-native-swipe-list-view";
import { Text, Container, Header } from "native-base";
import { StyleSheet, TouchableOpacity, View } from "native-base";

export default function ToDoList() {
  // receive state and dispatch from App.js
  const { state, dispatch } = useContext(TodosContext);

  const renderItem = (data) => (
    <View style={styles.rowFront}>
      <Text>{data.item.text}</Text>
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.backRightBtn]}>
        <Text style={{ color: "#FFF" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Container>
      <Header>
        <Text>ToDoList</Text>
      </Header>
      <SwipeListView
        data={state.todos}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  rowFront: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomWidth: 0.25,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    backgroundColor: "red",
    right: 0,
  },
});
