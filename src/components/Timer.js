import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing
} from 'react-native';
import PropTypes from 'prop-types';
import Svg, {
    Circle,
    LinearGradient,
    Defs,
    Stop
} from 'react-native-svg';
import moment from 'moment';

const Animate = {
    Svg: Animated.createAnimatedComponent(Svg)
};

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.circleAngle = new Animated.Value(0);
        this.rotateCircle = this.rotateCircle.bind(this);
    }

    componentDidUpdate(prevProps) {
        let { isActive } = this.props;
        if (prevProps.isActive == isActive) return;

        this.rotateCircle();
    }

    rotateCircle() {
        let { isActive } = this.props;
        if (!isActive) {
            this.circleAngle.setValue(0);
            return;
        };

        this.circleAngle.setValue(0);
        Animated.timing(this.circleAngle, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start(() => this.rotateCircle());
    }

    render() {
        let { time } = this.props;

        time = moment()
            .startOf('day')
            .second(time)
            .format('HH:mm:ss');

        let circumference = 2 * Math.PI * 128;

        const spin = this.circleAngle.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-360deg']
        });

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
                        stroke="#333"
                        strokeWidth={24}
                        strokeDasharray={[4, 8]}
                        fill="none" />
                </Svg>
                <Animate.Svg
                    width={320}
                    height={320}
                    style={[styles.svg, { transform: [{ rotate: spin }] }]}>
                    <Defs>
                        <LinearGradient id="grad" x1="0" y1="0" x2="128" y2="0">
                            <Stop offset="0" stopColor="#077aff" stopOpacity="0" />
                            <Stop offset="1" stopColor="#ad07f9" stopOpacity="1" />
                        </LinearGradient>
                    </Defs>
                    <Circle
                        ref={(circle) => this.circle = circle}
                        cx={160}
                        cy={160}
                        r={128}
                        stroke="url(#grad)"
                        strokeWidth={24}
                        strokeDasharray={[circumference, circumference]}
                        strokeDashoffset={circumference - circumference / 2}
                        strokeLinecap="round"
                        fill="none"
                        origin="160, 160" />
                </Animate.Svg>
                <Text style={styles.time}>
                    {time}
                </Text>
            </View>
        );
    }
}

Timer.propTypes = {
    time: PropTypes.number,
    isActive: PropTypes.bool,
};

Timer.defaultProps = {
    time: 0,
    isActive: false,
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
