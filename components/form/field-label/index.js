import React from 'react';
import Text from '../../text';
import {Wrapper} from '../../../layout';

function FormFieldLabel({label, subtitle = ''}) {
    return (
        <Wrapper
            styleString={` padding: 25px 25px; margin-top: 30px; background-color: #F7F7F7`}>
            <Text fontFamily="hsbc lt" styleString={`color: #404040; width: 100%`}>
                {label}
            </Text>
            {subtitle ? <Text fontFamily="hsbc ult" fontSize="16px"styleString = {`
                margin-top: 20px;
            
            `} >{subtitle}</Text>: null}
        </Wrapper>
    )
}
export default FormFieldLabel;