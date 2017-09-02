import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';

export default class BottomMenu extends Component {
    render() {
        let { children } = this.props;

        return (
            <View style={styles.container}>
                {children}
            </View>
        );
    }
}

BottomMenu.propTypes = {
    children: PropTypes.node
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 64,
    },
});
