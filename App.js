import React from "react";
import { Container, Header, Text } from "native-base";

const UserContext = React.createContext();

export default function App() {
  const username = "Greg";
  return (
    <UserContext.Provider value={username}>
      <Container>
        <ProductList />
      </Container>
    </UserContext.Provider>
  );
}

function ProductList(props) {
  return (
    <Header>
      <Product username={props.username} />
    </Header>
  );
}

function Product() {
  return (
    <UserContext.Consumer>
      {(value) => <Text>Received, {value}</Text>}
    </UserContext.Consumer>
  );
}
