import React from "react";
import { Button, Text, Icon } from "native-base";
import { withNavigation } from "react-navigation";

//Stores
// import authStore from "../../Stores/AuthStore";

const LoginButton = ({ navigation }) => {
  handlePress = () => navigation.navigate("Login");
  return (
    <Button transparent onPress={handlePress}>
      <Icon name="login" type="AntDesign" style={{ color: "white" }} />
    </Button>
  );
};

export default withNavigation(LoginButton);
