import React, { useContext } from "react";

function Product() {
  const value = useContext(UserContext);
  return <Text>Received, {value}</Text>;
}
