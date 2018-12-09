import {StyleSheet, Text} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    textBase: {
        fontFamily: 'hsbc-rg',
        fontSize: 20,
        color: '#333333'
    }
});

const HSBCText = ({
    style,
    children,
    ...restProps
}) => (
    <Text style={[styles.textBase, style]} { ...restProps }>
        {children}
    </Text>
);

export default HSBCText;