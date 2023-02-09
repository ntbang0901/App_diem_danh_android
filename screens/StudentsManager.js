import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, DataTable, Text } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import ModalView from '../components/ModalView'
const aaa = [
    {
        mssv: 'N19DCAT008',
        name: 'Nguyễn Thành Băng',
        status: 1
    },
    {
        mssv: 'N19DCAT007',
        name: 'Nguyễn Thế Bảo',
        status: 3
    },
    {
        mssv: 'N19DCAT074',
        name: 'Tạ Đức Tiến',
        status: 2
    },
    {
        mssv: 'N19DCAT067',
        name: 'Trương Chí Tài',
        status: 1
    }
]

const status = [
    {
        id: 1,
        label: 'Đúng giờ'
    },
    {
        id: 2,
        label: 'Trễ giờ'
    },
    {
        id: 3,
        label: 'Nghỉ học'
    }
]

const StudentsManager = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null)
    const [list, setList] = useState(aaa)
    const [itemEdit, setItemEdit] = useState(null)

    const handleEdit = (item) => {
        setVisible(true)
        setSelectedValue(item.status)
        setItemEdit(item)
    }

    const handleSubmitModal = () => {
        const newList = list.map((item) => {
            if (item.mssv === itemEdit.mssv) {
                item.status = selectedValue
            }
            return item
        })
        console.log('====================================')
        console.log(newList)
        console.log('====================================')
        setList(newList)
        setVisible(false)
    }
    return (
        <>
            <View
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>Môn An toàn mạng nâng cao</Text>
            </View>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>Ngày 10-02-2023</Text>
            </View>

            <View style={styles.container}>
                <DataTable>
                    <DataTable.Header style={styles.head}>
                        <DataTable.Title>MSSV</DataTable.Title>
                        <DataTable.Title>Họ và tên</DataTable.Title>
                        <DataTable.Title>Tráng thái</DataTable.Title>
                    </DataTable.Header>
                    {list &&
                        list.map((value, index) => (
                            <DataTable.Row
                                key={value.mssv + value.name + index}
                                style={{
                                    height: value.name.length + 40,
                                    alignItems: 'center',
                                    backgroundColor: 'lightyellow'
                                }}
                            >
                                <DataTable.Cell
                                    style={{
                                        alignItems: 'center',

                                        borderColor: 'black',
                                        borderBottomWidth: 1
                                    }}
                                >
                                    {value.mssv}
                                </DataTable.Cell>
                                <DataTable.Cell
                                    style={{
                                        alignItems: 'center',
                                        padding: 8,
                                        borderColor: 'black',
                                        borderBottomWidth: 1
                                    }}
                                >
                                    {value.name}
                                </DataTable.Cell>
                                <DataTable.Cell
                                    style={{
                                        alignItems: 'center',
                                        padding: 8,
                                        borderColor: 'black',
                                        borderBottomWidth: 1
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            alignItems: 'center'
                                        }}
                                        onPress={() => handleEdit(value)}
                                    >
                                        <Text style={styles.buttonText}>
                                            {value.status === 1 && 'Đúng giờ'}
                                            {value.status === 2 && 'Trễ giờ'}
                                            {value.status === 3 && 'Nghỉ học'}
                                        </Text>
                                    </TouchableOpacity>
                                </DataTable.Cell>
                            </DataTable.Row>
                        ))}
                </DataTable>
                <View
                    style={{
                        marginTop: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#DE2017',
                            padding: 10,
                            marginTop: 15,
                            borderRadius: 10,
                            width: 100,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: '600',
                                fontSize: 16
                            }}
                        >
                            Xuất file
                        </Text>
                    </TouchableOpacity>
                </View>
                <ModalView
                    visible={visible}
                    title={'Edit trạng thái'}
                    onDismiss={() => setVisible(false)}
                    onSubmit={handleSubmitModal}
                    cancelable
                >
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        {status.map((item) => (
                            <Picker.Item key={item.label + item.id} label={item.label} value={item.id} />
                        ))}
                    </Picker>
                </ModalView>
            </View>
        </>
    )
}

export default StudentsManager

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 30,
        backgroundColor: '#fff'
    },
    head: { height: 44, backgroundColor: 'lavender' },
    row: { backgroundColor: 'lightyellow' }
})
