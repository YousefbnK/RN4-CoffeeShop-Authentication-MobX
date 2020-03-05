import { createSwitchNavigator } from "react-navigation";

//Navs

import StackNav from "./StackNav";
import AuthNav from "./AuthNav";

const SwitchNav = createSwitchNavigator({
  AuthNav: AuthNav,
  StackNav: StackNav
});

export default SwitchNav;
