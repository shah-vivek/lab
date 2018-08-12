import React, {Component} from 'react';
import {CashDenomination, Text as TextBase, Button} from '../../../components';
import {Wrapper} from '../../../layout';
import _ from 'lodash';
import numeral from 'numeral';


const Text = TextBase.extend`
    margin-top: 10px;
    font-family: 'hsbc rg';
    font-size: 24px;

`;
const CenterAlignWrapper = Wrapper.extend `
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

`;

const denominationConfigArray = [
    {
        "type": "tenCoinsQuantity",
        "multiplier": 10,
        "label": "X 10",
        "badgeColor": "#0A60FF"
    }, {
        "type": "fiftyCoinsQuantity",
        "multiplier": 50,
        "label": "X 50",
        "badgeColor": "#4DAD4A"
    }, {
        "type": "hunderedCoinsQuantity",
        "multiplier": 100,
        "label": "X 100",
        "badgeColor": "#B24B47"
    }, {
        "type": "fiveHunderedCoinsQuantity",
        "multiplier": 500,
        "label": "X 500",
        "badgeColor": "#8C6637"
    }, {
        "type": "thousandCoinsQuantity",
        "multiplier": 1000,
        "label": "X 1000",
        "badgeColor": "#BD7041"
    }

];

class CashDeposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenCoinsQuantity: 0,
            fiftyCoinsQuantity: 0,
            hunderedCoinsQuantity: 0,
            fiveHunderedCoinsQuantity: 0,
            thousandCoinsQuantity: 0,
            totalSum: 0
        }
        this.onQuantityChange = this
            .onQuantityChange
            .bind(this);
    }
    onQuantityChange(type, value) {
        const currentState = {
            ...this.state
        }
        const multiplier = _
            .find(denominationConfigArray, {type})
            .multiplier;
        const oldTypeQuantity = this.state[type];
        currentState[type] = value
            ? + value
            : 0;
        currentState.totalSum += (value * multiplier) - (oldTypeQuantity * multiplier);
        this.setState(currentState);
    }

    

    render() {
        const {
            totalSum,
            ...cashDenominationProps
        } = this.state;
        
        return (
            <Wrapper styleString={` padding: 10px 40px; `}>
                <Wrapper>
                    <CashDenomination
                        denominationConfigArray={denominationConfigArray}
                        onQuantityChange={this.onQuantityChange}
                        {...cashDenominationProps}/>
                </Wrapper>
                <Wrapper styleString={` margin-top: 100px; `}>
                    <CenterAlignWrapper>
                        <Text styleString={`color:#585858`}>CASH DEPOSIT</Text>
                    </CenterAlignWrapper>
                    <CenterAlignWrapper>
                        <Text>HKD{numeral(totalSum).format('0,0.[00]')}</Text>
                    </CenterAlignWrapper>
                    <Wrapper styleString={` margin-top: 40px; `}>
                        <Button full onPress={() => {
                            this.props.history.push('/acknowledge-appointMent-booking', {
                                ...this.props.location.state,
                                ...this.state
                            });
                        }}>
                            <TextBase styleString={` color: #fff; `}>
                                Continue
                            </TextBase>
                        </Button>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        )
    }
}

export default CashDeposit;