import { createStackNavigator } from "react-navigation-stack";

import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const AuthNav = createStackNavigator(
  {
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthNav;
