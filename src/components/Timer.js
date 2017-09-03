import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';

import Svg, { Circle } from 'react-native-svg';
import moment from 'moment';

export default class Timer extends Component {
    render() {
        let { time } = this.props;

        time = moment()
            .startOf('day')
            .second(time)
            .format('HH:mm:ss');

        return (
            <View style={styles.container}>
                <Svg
                    width={320}
                    height={320}
                    style={styles.svg}>
                    <Circle
                        cx={160}
                        cy={160}
                        r={128}
                        stroke="#666"
                        strokeWidth={2}
                        fill="none" />
                    <Circle
                        cx={160}
                        cy={160}
                        r={128}
                        stroke="#14e6a0"
                        strokeWidth={16}
                        fill="none" />
                </Svg>
                <Text style={styles.time}>
                    {time}
                </Text>
            </View>
        );
    }
}

Timer.propTypes = {
    time: PropTypes.number
};

Timer.defaultProps = {
    time: 0
};

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 320,
        alignItems: 'center',
        justifyContent: 'center'
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    time: {
        color: 'white',
        fontSize: 48,
    }
});
