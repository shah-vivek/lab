import React from 'react';
import styled from 'styled-components';
import Text from '../text';
import {Wrapper} from '../../layout';
import Icon from '../icon';

const CardContainer = styled.TouchableOpacity `
    padding: 15px 15px;
    border-right-color: #EDED;
    border-top-color: #EDED;
    border-bottom-color: #EDED;
    border-width: 0.5;
    border-left-width: 5px;
    width: 100%;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    border-left-color: #ED1727;
    flex-wrap: wrap;
    
`;

const Card = ({
    title,
    subtitle,
    ...restProps
}) => (
    <CardContainer {...restProps}>
        <Wrapper styleString={`width: 85%`}>
            <Wrapper styleString={` width: 100%; `}>
                <Text styleString={`width: 100%; `}>{title}</Text>

            </Wrapper>
            <Wrapper styleString={` width: 100%; `}>
                <Text styleString={` font-size: 16px; width: 80%; `}>{subtitle}</Text>
            </Wrapper>
        </Wrapper>
        <Wrapper styleString={` width: 15% ;flex-direction: column; justify-content: center; `}>
            <Icon
                
                size={30}
                name="chevron-right"
                color="#ED1727"/>
        </Wrapper>

    </CardContainer>
);
export default Card;
