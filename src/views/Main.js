/**
 * Watchster
 * An open source Stopwatch App
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView
} from 'react-native';

import Timer from '../components/Timer';
import BottomMenu from '../components/BottomMenu';
import BottomButton from '../components/BottomButton';
import Lap from '../components/Lap';

const display = Dimensions.get('window');

const Condition = {
    IDLE: 'IDLE',
    START: 'START',
    STOP: 'STOP',
};

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            laps: [],
            condition: Condition.IDLE,
        };

        this.timeID = null;
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.lap = this.lap.bind(this);
        this.reset = this.reset.bind(this);
        this.renderBottomMenu = this.renderBottomMenu.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    start() {
        this.setState({
            condition: Condition.START
        });

        this.timeID = setInterval(() => {
            this.setState((prevState) => ({
                time: prevState.time + 1
            }));
        }, 1000);
    }

    stop() {
        this.setState({
            condition: Condition.STOP
        });

        clearInterval(this.timeID);
    }

    lap() {
        this.setState((prevState) => ({
            laps: [
                { 
                    id: prevState.laps.length + 1, 
                    time: prevState.time 
                },
                ...prevState.laps
            ]
        }));
    }

    reset() {
        this.setState((prevState) => ({
            time: 0,
            laps: [],
            condition: 'IDLE'
        }));
    }

    renderBottomMenu() {
        let { condition } = this.state;

        switch (condition) {
            case Condition.IDLE:
                return (
                    <BottomMenu>
                        <BottomButton onPress={this.start}>START</BottomButton>
                    </BottomMenu>
                );
                break;
            case Condition.START:
                return (
                    <BottomMenu>
                        <BottomButton onPress={this.lap}>LAP</BottomButton>
                        <BottomButton onPress={this.stop}>STOP</BottomButton>
                    </BottomMenu>
                );
                break;
            case Condition.STOP:
                return (
                    <BottomMenu>
                        <BottomButton onPress={this.reset}>RESET</BottomButton>
                        <BottomButton onPress={this.start}>CONTINUE</BottomButton>
                    </BottomMenu>
                );
                break;
            default:
                break;
        }
    }

    render() {
        let {
            time,
            laps,
            condition
        } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.timeContainer}>
                    <Timer
                        time={time}
                        isActive={condition == 'START'} />
                </View>
                <ScrollView style={styles.lapContainer}>
                    {laps.map((lap, index) => {
                        return (
                            <Lap
                                key={index}
                                index={lap.id}
                                time={lap.time} />
                        );
                    })}
                </ScrollView>
                {this.renderBottomMenu()}
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
    },
    lapContainer: {
        flex: 1,
    }
});
