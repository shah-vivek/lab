import React, {Component} from 'react';
import _ from 'lodash';
import {Wrapper} from '../../layout';
import Text from '../text';
import {TextInput} from '../form';
import {Badge} from 'native-base';


const WrapperBase = Wrapper.extend `
    align-content: center;
    justify-content: flex-start;
    flex-direction: row;
    width:100%;
`;

const ChildWrapperBase = Wrapper.extend `
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 33%;
`;

const HeaderTextBase = Text.extend `
    align-self: center;
    font-family: 'hsbc rg';
    color: black;
    font-size: 18px;    
`
const Header = () => {
    return (
        <WrapperBase>
            <ChildWrapperBase>
                <HeaderTextBase>Quantity</HeaderTextBase>
            </ChildWrapperBase>
            <ChildWrapperBase>
                <HeaderTextBase>Denomination</HeaderTextBase>
            </ChildWrapperBase>
            <ChildWrapperBase>
                <HeaderTextBase>Sub Total</HeaderTextBase>
            </ChildWrapperBase>
        </WrapperBase>
    );
}

const CashDenomination = (props) => {

    return (
        <Wrapper>
            <Header />
            {_.map(props.denominationConfigArray, ({
                type,
                multiplier,
                label,
                badgeColor
            }, index) => {
                return (
                    <WrapperBase key={index}>
                        <ChildWrapperBase>
                            <TextInput
                                keyboardType = 'numeric'
                                value={ props[type] ? props[type]+'' : ''} 
                                onChangeText=
                                {(value) => {props.onQuantityChange(type, value); }}/>
                        </ChildWrapperBase>

                        <ChildWrapperBase>
                            <Badge
                                style={{
                                backgroundColor: badgeColor,
                                alignSelf: 'center',
                                height: 'auto',
                                width: 'auto'
                            }}>
                                <Wrapper
                                    style={{
                                    padding: 5,
                                    alignContent: 'center',
                                    width: '100%'
                                }}>
                                    <Text fontSize= {16} styleString={` color: #fff; `}>{label}</Text>
                                </Wrapper>

                            </Badge>
                        </ChildWrapperBase>
                        <ChildWrapperBase>
                            <Text>{props[type] * multiplier}</Text>
                        </ChildWrapperBase>
                    </WrapperBase>
                );
            })}

        </Wrapper>
    );

}

export default CashDenomination;