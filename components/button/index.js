import styled from 'styled-components';
import {Button} from 'native-base';

const SButton = styled(Button)`
    ${props => props.disabled ? "opacity: 0.5;" : ""}
`;

export default SButton;

const SelectableButton = styled.TouchableOpacity.attrs({
    style: {
        
        boxShadow: "0 8px 6px -6px black"
    }
})`
    padding: 20px 10px;
    border-width: 1;
    justify-content: center;
    align-items: center;
    border-color: #D7D8D6;
    border-radius: 5px;
    ${props =>  props.selected 
                    ? 
                `
                    background-color: #04817D;
                    border-width: 0;
                `
                    :
                `
                    background-color: transparent;
                `
    }
    ${props =>  props.disabled 
                    ? 
                `
                    background-color: #F9F9F9;;
                    border-color: #AAA;
                    border-width: 1px;
                
                `
                    :
                `

                `
    }
`;

export {SelectableButton};




