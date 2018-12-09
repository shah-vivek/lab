import React, {Component} from 'react';
import {Button, Text, TextInput, FormFieldLabel} from '../../components';
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
                <FormFieldLabel label="1. Enter your Account Number"/>

                <Wrapper styleString={` padding: 25px 25px;padding-top:0px; `}>
                    <TextInput
                        keyboardType = 'numeric'
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
                <Wrapper styleString={` padding: 25px 25px;padding-top:0px; `}>

                    <Button
                        style={{
                        marginTop: 60
                    }}
                        full
                        onPress={() => {
                        this
                            .props
                            .history
                            .push('scan-qr-code');
                    }}>
                        <Text styleString={` color: #fff; `}>
                            CHECK IN
                        </Text>
                    </Button>
                </Wrapper>
            </Wrapper>
        )
    }
}
