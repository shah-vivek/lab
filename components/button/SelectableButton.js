import styled from 'styled-components';

export default styled
    .TouchableOpacity
    .attrs({
        style: {

            boxShadow: "0 8px 6px -6px black"
        }
    })`
    padding: 20px 10px;
    border-width: 1;
    justify-content: center;
    align-items: center;
    border-color: #AAA;
    ${props => props.selected
    ? `
                    background-color: #04817D;
                    border-width: 0;
                `
    : `
                    background-color: transparent;
                `}
    ${props => props.disabled
        ? `
                    background-color: #F9F9F9;;
                    border-color: #D7D8D6;
                    border-width: 1px;
                
                `
        : `

                `}
`;
