import styled from 'styled-components';
import {View} from 'react-native';

const Wrapper = styled.View`
    ${props => props.styleString || ''}
`;

export default Wrapper;