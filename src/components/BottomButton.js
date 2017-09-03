import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
import PropTypes from 'prop-types';

export default class BottomButton extends Component {
    render() {
        let {
            children,
            onPress
        } = this.props;

        return (
            <TouchableNativeFeedback
                onPress={onPress}>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        {children}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

BottomButton.propTypes = {
    children: PropTypes.string,
    onPress: PropTypes.func
};

BottomButton.defaultProps = {
    children: 'Text'
};

const styles = StyleSheet.create({
    container: {
        flex:  1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a165bc'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'FjallaOne'
    }
});
