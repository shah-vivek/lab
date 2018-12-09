import React, {Component} from 'react';
import {Button, CircularIcon, Text} from '../../components';
import {Wrapper} from '../../layout';

const Row = Wrapper.extend `
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export default class DepositCheque extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper
                styleString={`background-color: #76612C;; flex: 1; flex-direction: column; `}>
                <Wrapper styleString={` padding: 20px; `}>
                    <Wrapper
                        styleString={` padding-bottom: 40px; margin-top: 30px flex: 1; justify-content: center; align-items: center; `}>
                        <CircularIcon name="agree"/>

                    </Wrapper>
                    <Wrapper
                        styleString={` width: 100%; justify-content: center; align-items: center; margin-bottom: 15px; `}>
                        <Text fontFamily="hsbc lt" fontSize='24px' styleString={` color: #fff; text-align: center;`}>
                            DEPOSIT COMPLETE
                        </Text>

                    </Wrapper>

                </Wrapper>
                <Wrapper
                    styleString={` background-color: #fff; padding-top: 50px; padding-bottom: 50px;`}>
                    <Row styleString={` width: 80%; align-self: center; margin-bottom: 20px; `}>
                        <Text
                            styleString={` text-align: center; width: 100%; font-size: 30px; font-family: "hsbc md"; `}>
                            Please deposit the cheque at nearest ATM
                        </Text>
                    </Row>

                </Wrapper>
                
                <Wrapper
                    styleString={`padding: 30px 40px; padding-top: 30px;`}>
                    <Button
                        full
                        onPress={() => {
                        this
                            .props
                            .history
                            .replace('/select-service');
                    }}>
                        <Text styleString={` color: #fff; `}>
                            Select other service
                        </Text>
                    </Button>
                </Wrapper>
            </Wrapper>
        )
    }
}