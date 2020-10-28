function ProductList(props) {
  return (
    <Header>
      <Product username={props.username} />
    </Header>
  );
}

function Product(props) {
  return <Text>{props.username}</Text>;
}
