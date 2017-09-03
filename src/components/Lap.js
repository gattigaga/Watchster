import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Lap extends Component {
    render() {
        let { 
            index,
            time    
        } = this.props;

        time = moment()
            .startOf('day')
            .second(time)
            .format('HH:mm:ss');

        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={styles.lapIndex}>LAP {index}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.lapTime}>{time}</Text>
                </View>
            </View>
        );
    }
}

Lap.propTypes = {
    index: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#111',
        borderBottomWidth: 0.5,
        borderBottomColor: '#222'
    },
    column: {
        flex: 1,
    },
    lapIndex: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'FjallaOne'
    },
    lapTime: {
        color: 'white',
        fontSize: 20,
        textAlign: 'right',
        fontFamily: 'FjallaOne'
    }
});
