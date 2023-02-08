import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const urlAvatar =
    "https://toplist.vn/images/800px/toc-uon-xoan-gon-song-445306.jpg";
  return (
    <View
      style={{
        marginTop: 80,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}>
      <View
        style={{
          alignItems: "center",
        }}>
        <Image
          style={{
            borderColor: "red",
            borderWidth: 1,
            height: 135,
            width: 135,
            resizeMode: "cover",
            borderRadius: 9999,
          }}
          source={{
            uri: urlAvatar,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            fontWeight: "500",
          }}>
          GV. NGUYỄN VĂN A
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#DE2017",
            padding: 10,
            marginTop: 15,
            borderRadius: 20,
            width: 200,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Product")}>
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}>
            Quản lý lớp
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#DE2017",
            padding: 10,
            marginTop: 15,
            borderRadius: 20,
            width: 200,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("tkbManager")}>
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}>
            Lịch
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#DE2017",
            padding: 10,
            marginTop: 15,
            borderRadius: 20,
            width: 200,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 20,
            }}>
            Đăng xuất
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
