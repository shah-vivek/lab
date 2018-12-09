import React from 'react';
import styled from 'styled-components';
import {Wrapper} from '../../layout';
import Text from '../text';
import {Image} from 'react-native';

const CircularImageButtonContainer = styled.TouchableOpacity `
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 15px;
    margin-bottom: 20px;
    margin-top: 20px;   
`;

const CircularImageButton = (label, iconUrl, ...buttonProps) => {
    (
        <CircularImageButtonContainer {...buttonProps}>
            <Wrapper
                styleString={`width: 100%;height: 80%;flex-direction: row; justify-content: center; align-items:center;`}>
                <Image source={iconUrl} style="height: 100%;width:100%;" />
            </Wrapper>
            <Wrapper styleString={`height: 20%;width: 100%;`}>
                <Text styleString={`text-align: center;`}>
                    {label}
                </Text>
            </Wrapper>

        </CircularImageButtonContainer>
    )
}

export default CircularImageButtonContainer;