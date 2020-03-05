import { decorate, observable } from "mobx";
import { instance } from "./instance";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import { withNavigation } from "react-navigation";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      instance.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodeUser = jwt_decode(token);
      this.user = decodeUser;
      await AsyncStorage.setItem("token", token);
    } else {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("token", token);
      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("/login/", userData);
      const data = res.data;
      await this.setUser(data.token);
      navigation.navigate("ListScreen");
    } catch (error) {
      console.error(error.response.data);
      console.log(error.response);
    }
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/register/", userData);
      const data = res.data;
      //   console.log("Signed Up !", data);
      await this.setUser(data.token);
      navigation.navigate("ListScreen");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  logout = async () => {
    await this.setUser();
    // console.log("We Logged Out !!");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const data = jwt_decode(token);
      if (data.exp >= currentTime) {
        await this.setUser(token);
      } else {
        await this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default withNavigation(authStore);
