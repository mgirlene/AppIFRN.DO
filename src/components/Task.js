import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/EvilIcons'

export function Task(props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

  
    return (
        <View style={styles.containerTask}>
            <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.task}>{props.name}</Text>
              
              
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={props.apagar}>
                    <Icon name="trash" size={30} color='#808080' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerTask: {
        marginTop: 15,
        width: 350,
        height: 50,
        backgroundColor: '#DEE2E2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    task: {
        fontSize: 20
    },

    buttonTask: {
        padding: 10,
        marginRight:15
    },
    checkbox:{
        marginLeft:10,
    }
})