import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ options, navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState(null);

  const handleTextChanges = (mytextname) => {
    return (val) => {
      setUser((prev) => ({ ...prev, [mytextname]: val }));
    };
  };

  const handleLogin = () => {
    navigation.navigate("Home");

    // if (user.username === "admin" && user.password === "123") {
    //   setMessage(null);
    // } else {
    //   setMessage("Tài khoản hoặc mật khẩu không chính xác");
    // }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}>
      <Image source={require("../assets/images/logo.png")} />
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Text style={{ color: "red" }}>{message && message}</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            padding: 10,
            marginTop: 10,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 20,
          }}
          placeholder="Tài khoản"
          onChangeText={handleTextChanges("username")}
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            marginTop: 10,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 20,
          }}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          onChangeText={handleTextChanges("password")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <TouchableOpacity
          style={{
            width: 200,
            backgroundColor: "#DE2017",
            padding: 10,
            marginTop: 10,
            borderRadius: 20,
            alignItems: "center",
          }}
          onPress={() => handleLogin()}>
          <Text
            style={{
              color: "white",
              fontWeight: "600",
            }}>
            ĐĂNG NHẬP
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontWeight: "600", textDecorationLine: "underline" }}>
          Quên mật khẩu ?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
