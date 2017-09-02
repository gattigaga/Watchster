/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import Timer from '../components/Timer';

const display = Dimensions.get('window');

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.timeContainer}>
                    <Timer />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    timeContainer: {
        width: display.width,
        height: display.width,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
