import React from 'react';
import {Text} from '../../text';
import {Wrapper} from '../../../layout';

function FormFieldLabel({label}) {
    return (
        <Wrapper
            styleString={` padding: 25px 25px; margin-top: 30px; background-color: #F7F7F7`}>
            <Text fontFamily="hsbc lt" styleString={`color: #404040`}>
                {label}
            </Text>
        </Wrapper>
    )
}
export default FormFieldLabel;