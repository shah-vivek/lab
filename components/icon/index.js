import React from 'react';
import styled, {css} from 'styled-components';
import {createIconSet} from 'react-native-vector-icons';
import hsbcGlyphMap from './fontContentMap';
import {Wrapper} from '../../layout';

let Icon = createIconSet(hsbcGlyphMap, 'hsbc-icons');

Icon = styled(Icon)`
    ${props => props.styleString}
`;

export default Icon;

const CircularIcon = ({name}) => {
    console.log("Icon name ", name);
    return (
        <Wrapper
            styleString={` background-color: #12857F; border-radius:25px; height:50px; width: 50px; align-items: center; justify-content: center; `}>
            <Icon name={name} size={40} color="#fff"/>
        </Wrapper>
    );
};

export {
    CircularIcon
}