import React from "react";
import { Button, Text } from "native-base";
import { observer } from "mobx-react";

//Stores
import authStore from "../../Stores/AuthStore";

const LogoutButton = () => {
  return (
    authStore.user && (
      <Button danger onPress={authStore.logout}>
        <Text>Logout</Text>
      </Button>
    )
  );
};

export default observer(LogoutButton);
