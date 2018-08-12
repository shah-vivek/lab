import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from '../../components';
import {Wrapper} from '../../layout';

const validateAccountNumber = (accountNumber = '') => {
    return /^\d{10,}$/.test(accountNumber);;
};

export default class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this.onAccountNumberSubmit = this
            .onAccountNumberSubmit
            .bind(this);
        this.onAccountNumberChange = this
            .onAccountNumberChange
            .bind(this);

        this.state = {
            accountNumber: props.accountNumber || '',
            isAccountNumberValid: validateAccountNumber(props.accountNumber) || false,
            isAccountFieldTouched: props.accountNumber
        }

    }

    onAccountNumberSubmit() {
        this
            .props
            .history
            .push('/verify-sms-code', {accountNumber: this.state.accountNumber});
    }

    onAccountNumberChange(accountNumber) {
        this.setState({accountNumber, isAccountNumberValid: validateAccountNumber(accountNumber), isAccountFieldTouched: true});
    }

    render() {
        const {isAccountNumberValid, isAccountFieldTouched} = this.state;
        const {onAccountNumberSubmit} = this;
        return (
            <Wrapper >
                <Wrapper
                    styleString={` padding: 25px 25px; margin-top: 30px; background-color: #F7F7F7`}>
                    <Text fontFamily="hsbc lt" styleString={`color: #404040`}>
                        1. Enter your Account Number
                    </Text>
                </Wrapper>

                <Wrapper styleString={` padding: 25px 25px;padding-top:0px; `}>
                    <TextInput
                        onChangeText={this.onAccountNumberChange}
                        value={this.state.accountNumber}/>
                    <Button
                        style={{
                        marginTop: 35
                    }}
                        full
                        onPress={onAccountNumberSubmit}
                        disabled={!isAccountNumberValid}>
                        <Text styleString={` color: #fff; `}>
                            Continue
                        </Text>
                    </Button>
                </Wrapper>
            </Wrapper>
        )
    }
}
