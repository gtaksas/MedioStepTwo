import React, { Component } from 'react';
import { StyleSheet, Image, Alert} from 'react-native';



export default class PageTwo extends Component {

    render() {

        if (this.props.check) {
            return (
                <Image
                    style={styles.bgPicture}
                    source={{ uri: this.props.check }}
                />
            );
        }

        else {
            return (
                <Image
                    style={styles.bgPicture}
                    source={{ uri: 'https://image.freepik.com/free-photo/medical-doctor-woman-blue-background-holding-stethoscope-focus_136686-6.jpg' }}
                />
            );
        }
    }
}

const styles = StyleSheet.create({
    bgPicture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    }
});