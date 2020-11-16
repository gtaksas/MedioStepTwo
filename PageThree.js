import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class PageThree extends Component {

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.btnContainer} onPress={this.onPressNext.bind(this)}>
                    <Text style={styles.textColor}>Kapcsoló</Text>
                </TouchableOpacity>

            </View>
        );
    }
    onPressNext() {
        Actions.Kezdőlap({ data: "Változás" });
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textColor: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    btnContainer: {
        backgroundColor: "#4c91e0",
        padding: 20,
        borderRadius: 10
    }
}
