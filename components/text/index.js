import styled from 'styled-components';

const Text = styled.Text`
    font-family: ${props => props.fontFamily || "hsbc lt"};
    font-size: ${props => props.fontSize || "20px"};
    ${props => props.styleString};
`;

export default Text;
