import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width;
//var height = Dimensions.get('window').height;


export default class PageFour extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
        }
    }

    typeSelected(value) {
        this.setState({
            itemPressed: value
        });
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                mid={item.megyeid}
                onPressItem={this.handlePress}
            >
                <View>
                    <Text
                        style={[
                            styles.city,
                            {
                                borderColor: 'green',
                                borderWidth: this.state.itemPressed === item.megyeid ? 6 : 0,
                                backgroundColor: this.state.itemPressed === item.megyeid ? '#55a4ed' : '#4c91e0'
                            }
                        ]}
                        onPress={() => this.typeSelected(item.megyeid)}
                    >
                        {item.vnev}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        const url = 'http://majorbence.hu/GmEn2AZwoD/?cities=true'
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    city: {
        marginTop: 2,
        padding: 25,
        width: width,
        backgroundColor: '#4c91e0',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
});