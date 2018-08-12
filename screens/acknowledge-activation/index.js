import React, {Component} from 'react';
import { View } from 'react-native';
import {Button, CircularIcon, Text} from '../../components';
import {Wrapper} from '../../layout';


export default class AcknowledgeActivation extends Component {
    constructor (props) {
        super(props);
        this.onAcknowledgementReceived = this.onAcknowledgementReceived.bind(this);
    }

    onAcknowledgementReceived(){
        this.props.history.push('/select-branch');
    }

    render() {
        const {onAcknowledgementReceived} = this;
        return (
            <Wrapper styleString = {`
                flex: 1;
                flex-direction: column;
            `}>
                <Wrapper
                    styleString = {`
                        background-color: #76612C;
                        padding-top: 30px;
                        padding-bottom: 30px;
                    `}

                >
                    <Wrapper 
                        styleString = {`
                            padding-bottom: 40px;
                            flex: 1;
                            justify-content: center;
                            align-items: center;
                        `}
                    >
                        <CircularIcon name = "agree" />
                        
                    </Wrapper>
                    <Wrapper styleString = {`
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 30px;
                    `
                    }>
                        <Text fontFamily="hsbc lt"
                            styleString = {`
                                color: #fff;
                            `}
                        >
                            Activation Complete
                        </Text>

                    </Wrapper>
                    
                </Wrapper>
                <Wrapper
                    styleString = {`
                        padding: 30px 40px; 
                        padding-top: 130px;
                    `}
                
                >
                    <Button
                        full
                        onPress={onAcknowledgementReceived}
                    >
                        <Text 
                            styleString={`
                                color: #fff;
                            `}
                        >
                            Continue
                        </Text>
                    </Button>
                </Wrapper>
            </Wrapper>
        )
    }
}
