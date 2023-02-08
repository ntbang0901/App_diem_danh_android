import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, DataTable, Text } from "react-native-paper";
const aaa = [
  {
    mssv: "N19DCAT008",
    name: "Nguyễn Thành Băng",
    status: "Đúng giờ",
  },
  {
    mssv: "N19DCAT007",
    name: "Nguyễn Thế Bảo",
    status: "Nghỉ học",
  },
  {
    mssv: "N19DCAT074",
    name: "Tạ Đức Tiến",
    status: "Trễ giờ",
  },
  {
    mssv: "N19DCAT067",
    name: "Trương Chí Tài",
    status: "Nghỉ học",
  },
];

const StudentsManager = ({ navigation }) => {
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
            <DataTable.Title>MSSV</DataTable.Title>
            <DataTable.Title>Họ và tên</DataTable.Title>
            <DataTable.Title>Tráng thái</DataTable.Title>
          </DataTable.Header>
          {aaa.map((value) => (
            <DataTable.Row
              key={value.mssv}
              style={{
                height: value.name.length + 40,
                alignItems: "center",
                backgroundColor: "lightyellow",
              }}>
              <DataTable.Cell
                style={{
                  alignItems: "center",

                  borderColor: "black",
                  borderBottomWidth: 1,
                }}>
                {value.mssv}
              </DataTable.Cell>
              <DataTable.Cell
                style={{
                  alignItems: "center",
                  padding: 8,
                  borderColor: "black",
                  borderBottomWidth: 1,
                }}>
                {value.name}
              </DataTable.Cell>
              <DataTable.Cell
                style={{
                  alignItems: "center",
                  padding: 8,
                  borderColor: "black",
                  borderBottomWidth: 1,
                }}>
                {value.status}
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

export default StudentsManager;

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
