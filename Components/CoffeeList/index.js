import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Stores
import coffeeStore from "../../Stores/coffeeStore";
import authStore from "../../Stores/AuthStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";
import LogoutButton from "../Buttons/LogoutButton";
import AuthStore from "../../Stores/AuthStore";

const CoffeeList = () => {
  if (coffeeStore.loading) return <Spinner />;
  const coffeeshopList = coffeeStore.coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <CartButton />,
  headerLeft: <LogoutButton />
};

export default observer(CoffeeList);
