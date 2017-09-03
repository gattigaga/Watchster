/**
 * Watchster
 * An open source Stopwatch App
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StatusBar
} from 'react-native';

import Main from './src/views/Main';

export default class Watchster extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <Main />
        );
    }
}

AppRegistry.registerComponent('Watchster', () => Watchster);
