import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, DataTable, Text } from "react-native-paper";
const aaa = [
  {
    day: "Thứ hai",
    morning: "Kiểm thử xăm nhập",
    afternoon: "An toàn mạng nâng cao",
  },
  {
    day: "Thứ ba",
    morning: "",
    afternoon: "",
  },
  {
    day: "Thứ tư",
    morning: "An toàn mạng nâng cao",
    afternoon: "",
  },
  {
    day: "Thứ năm",
    morning: "",
    afternoon: "An toàn mạng nâng cao",
  },
  {
    day: "Thứ sáu",
    morning: "",
    afternoon: "An toàn mạng nâng cao",
  },
];

const TKBManager = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>Từ ngày 08/02/2023 -- đén 12/02/2023</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>Ngày 10-02-2023</Text>
      </View>

      <View style={styles.container}>
        <DataTable>
          <DataTable.Header style={styles.head}>
            <DataTable.Title></DataTable.Title>
            <DataTable.Title>Sáng</DataTable.Title>
            <DataTable.Title>Chiều</DataTable.Title>
          </DataTable.Header>
          {aaa.map((value) => (
            <DataTable.Row
              key={value.day}
              style={{
                height:
                  value.morning.length > value.afternoon.length
                    ? value.morning.length + 30
                    : value.afternoon.length + 30,
                alignItems: "center",
                backgroundColor: "lightyellow",
              }}>
              <DataTable.Cell
                style={{
                  alignItems: "center",

                  borderColor: "black",
                  borderBottomWidth: 1,
                }}>
                {value.day}
              </DataTable.Cell>
              <DataTable.Cell
                style={{
                  alignItems: "center",
                  padding: 8,
                  borderColor: "black",
                  borderBottomWidth: 1,
                }}>
                {value.morning}
              </DataTable.Cell>
              <DataTable.Cell
                style={{
                  alignItems: "center",
                  padding: 8,
                  borderColor: "black",
                  borderBottomWidth: 1,
                }}>
                {value.afternoon}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#DE2017",
              padding: 10,
              marginTop: 15,
              borderRadius: 10,
              margin: 10,
              width: 100,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 16,
              }}>
              Tuần trước
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#DE2017",
              padding: 10,
              margin: 10,
              marginTop: 15,
              borderRadius: 10,
              width: 100,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 16,
              }}>
              Tuần kế
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 0,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#DE2017",
              padding: 10,
              marginTop: 15,
              borderRadius: 10,
              width: 100,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 16,
              }}>
              Xuất file
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TKBManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  head: { height: 44, backgroundColor: "lavender" },
  row: { backgroundColor: "lightyellow" },
});
