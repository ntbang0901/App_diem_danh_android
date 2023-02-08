import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, DataTable, Text } from "react-native-paper";
const aaa = [
  "Phát triển ứng dụng web cho các thiết bị di dộng 2023 ",
  "An toàn ứng dụng Web và CSDL",
  "Lập trình C++",
  "An toàn mạng",
  "An toàn mạng nâng cao",
  "An toàn mạng nâng cao 2",
];

const ClassManager = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <DataTable>
          <DataTable.Header style={styles.head}>
            <DataTable.Title>Lớp</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>
          {aaa.map((value) => (
            <DataTable.Row
              key={value}
              style={{
                height: value.length + 30,
                alignItems: "center",
                backgroundColor: "lightyellow",
              }}>
              <DataTable.Cell
                style={{
                  alignItems: "center",
                  borderColor: "black",
                  paddingRight: 4,
                  borderBottomWidth: 1,
                }}>
                {value}
              </DataTable.Cell>
              <DataTable.Cell
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderLeftColor: "black",
                  borderColor: "black",
                  borderLeftWidth: 1,
                  borderBottomWidth: 1,
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#DE2017",
                    }}
                    onPress={() => navigation.navigate("Subject")}>
                    Xem
                  </Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
        <View
          style={{
            marginTop: 20,
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

export default ClassManager;

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
