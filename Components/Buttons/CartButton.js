import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Text, Button } from "native-base";

// Stores
import cartStore from "../../Stores/cartStore";
import authStore from "../../Stores/AuthStore";
import LoginButton from "./LoginButton";

const CartButton = ({ navigation }) => {
  const handlePress = () => navigation.navigate("CartScreen");

  return authStore.user ? (
    <Button onPress={handlePress} transparent light>
      <Text style={{ color: "white" }}>{cartStore.quantity}</Text>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        style={{ color: "white" }}
        onPress={handlePress}
      />
    </Button>
  ) : (
    <LoginButton />
  );
};

export default withNavigation(observer(CartButton));
