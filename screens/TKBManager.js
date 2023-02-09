import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, DataTable, Text } from 'react-native-paper'
import ModalView from '../components/ModalView'
const aaa = [
    {
        id: 1,
        day: 'Thứ hai',
        morning: {
            subject: 'Kiểm thử xăm nhập',
            note: 'Hôm nay dạy chơi chơi'
        },
        afternoon: {
            subject: 'Kiểm thử xăm nhập 2',
            note: 'Hôm nay dạy chơi chơi 2'
        }
    },
    {
        id: 2,
        day: 'Thứ ba',
        morning: {
            subject: 'Kiểm thử xăm nhập 3',
            note: 'Hôm nay dạy chơi chơi 3'
        },
        afternoon: {
            subject: 'Kiểm thử xăm nhập 4',
            note: 'Hôm nay dạy chơi chơi 4'
        }
    },
    {
        id: 3,
        day: 'Thứ tư',
        morning: {
            subject: 'Kiểm thử xăm nhập 5',
            note: 'Hôm nay dạy chơi chơi 5'
        },
        afternoon: {
            subject: 'Kiểm thử xăm nhập 2',
            note: 'Hôm nay dạy chơi chơi 2'
        }
    },
    {
        id: 4,
        day: 'Thứ năm',
        morning: {
            subject: '',
            note: 'Hôm nay dạy chơi chơi'
        },
        afternoon: {
            subject: '',
            note: 'Hôm nay trống'
        }
    },
    {
        id: 5,
        day: 'Thứ sáu',
        morning: {
            subject: 'Kiểm thử xăm nhập',
            note: 'Hôm nay dạy chơi chơi'
        },
        afternoon: {
            subject: 'Kiểm thử xăm nhập 2',
            note: 'Hôm nay dạy chơi chơi 2'
        }
    }
]

const TKBManager = ({ navigation }) => {
    const [tkb, setTkb] = useState(aaa)
    const [visible, setVisible] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null)
    const [ghichu, setGhichu] = useState('')

    const handleSubmitModal = () => {
        const newList = tkb.map((item) => {
            if (item.id === selectedValue.id) {
                if (selectedValue.time === 'morning') {
                    console.log('====================================')
                    console.log(selectedValue.time)
                    console.log('====================================')
                    item.morning.note = ghichu
                } else {
                    item.afternoon.note = ghichu
                }
            }
            setGhichu('')
            return item
        })
        setTkb(newList)
        setVisible(false)
    }
    console.log(ghichu)

    return (
        <ScrollView>
            <View
                style={{
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>Từ ngày 08/02/2023 -- đén 12/02/2023</Text>
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
                                        ? value.morning.subject.length + value.morning.note.length + 70
                                        : value.afternoon.subject.length + value.afternoon.note.length + 70,
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
                                {value.day}
                            </DataTable.Cell>
                            <DataTable.Cell
                                style={{
                                    alignItems: 'center',
                                    padding: 8,
                                    borderColor: 'black',
                                    borderBottomWidth: 1
                                }}
                                onPress={() => {
                                    setVisible(true)
                                    setGhichu(value.morning.note)
                                    setSelectedValue({ ...value, time: 'morning' })
                                }}
                            >
                                {value.morning.subject}{' '}
                                {value.morning.note.length > 0 && `( Ghi chú: ${value.morning.note})`}
                            </DataTable.Cell>
                            <DataTable.Cell
                                style={{
                                    alignItems: 'center',
                                    padding: 8,
                                    borderColor: 'black',
                                    borderBottomWidth: 1
                                }}
                                onPress={() => {
                                    setVisible(true)
                                    setGhichu(value.afternoon.note)
                                    setSelectedValue({ ...value, time: 'afternoon' })
                                }}
                            >
                                {value?.afternoon?.subject}
                                {value.afternoon.note.length > 0 && `( Ghi chú: ${value.afternoon.note})`}
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: 'row',
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
                            margin: 10,
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
                            Tuần trước
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#DE2017',
                            padding: 10,
                            margin: 10,
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
                            Tuần kế
                        </Text>
                    </TouchableOpacity>
                </View>
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
            </View>
            <ModalView
                visible={visible}
                title='Ghi chú'
                onDismiss={() => setVisible(false)}
                onSubmit={handleSubmitModal}
                cancelable
            >
                <TextInput label='Ghi chú' value={ghichu} onChangeText={(text) => setGhichu(text)} mode='outlined' />
            </ModalView>
        </ScrollView>
    )
}

export default TKBManager

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
