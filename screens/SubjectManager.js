import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, DataTable, Text } from "react-native-paper";
const aaa = ["11-2-2023", "12-2-2023", "13-2-2023", "14-2-2023", "15-2-2023"];

const SubjectManager = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>Môn An toàn mạng nâng cao</Text>
      </View>

      <View style={styles.container}>
        <DataTable>
          <DataTable.Header style={styles.head}>
            <DataTable.Title>Ngày</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>
          {aaa.map((value) => (
            <DataTable.Row
              key={value}
              style={{
                height: value.length + 40,
                alignItems: "center",
                backgroundColor: "lightyellow",
              }}>
              <DataTable.Cell
                style={{
                  alignItems: "flex-start",
                  padding: 8,
                  borderColor: "black",
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Students")}>
                  <Text
                    style={{
                      color: "#DE2017",
                    }}>
                    Xem
                  </Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
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

export default SubjectManager;

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
