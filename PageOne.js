import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';


const SecPicUrl = 'https://image.freepik.com/free-photo/hands-unrecognizable-female-doctor-writing-form-typing-laptop-keyboard_1098-20374.jpg';

export default class PageOne extends Component {

    render() {

        if (this.props.data ) {
            return (
                <View style={styles.container}>
                    <Text
                        style={styles.txtStyle2}
                        onPress={() => Actions.second({ check: SecPicUrl }, alert(SecPicUrl))}
                    >
                        {this.props.data}
                    </Text>
                </View>
            );
        }

        else {
            return (
                <View style={styles.container}>
                    <Text style={styles.txtStyle}>
                        Kiindulópont
                    </Text>
                </View>
            );
        }
    }
}

const styles = {

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtStyle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    txtStyle2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4c91e0',
    }
}