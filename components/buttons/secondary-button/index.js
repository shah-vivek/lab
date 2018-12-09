import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../text';

const baseStyle = {

    backgroundColor: 'white',
    fontFamily: "hsbc-rg",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20 
};
const SButton = ({
    style = {},
    label = "",
    ...restProps
}) => {
    console.log('button label ', label);
    return (
        <TouchableOpacity style={[baseStyle]} {...restProps}>

            <Text>{label}</Text>
        </TouchableOpacity>

    )
};

export default SButton;