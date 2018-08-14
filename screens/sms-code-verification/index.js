import React, {Component} from 'react';
import {Button, Text, TextInput, FormFieldLabel} from '../../components';
import {Wrapper} from '../../layout';

const validateSMSCode = (smsCode = "") => {
    return /^\d{8,}$/.test(smsCode);
};
class SmsCodeVerification extends Component {
    constructor(props) {
        super(props);
        this.onSMSCodeSubmit = this
            .onSMSCodeSubmit
            .bind(this);
        this.onSMSCodeChange = this
            .onSMSCodeChange
            .bind(this);

        this.state = {
            smsCode: props.smsCode || '',
            isSMSCodeValid: validateSMSCode(props.smsCode) || false
        }

    }

    onSMSCodeSubmit() {
        this
            .props
            .history
            .push('/acknowledge-activation');
    }

    onSMSCodeChange(smsCode) {

        this.setState({smsCode, isSMSCodeValid: validateSMSCode(smsCode)});
    }

    render() {
        const {isSMSCodeValid, smsCode} = this.state;
        const {onSMSCodeSubmit} = this;
        console.log(isSMSCodeValid);
        return (
            <Wrapper>
                <FormFieldLabel label="2. Verify by SMS" subtitle = "We have sent a verification code to you at mobile number ******99"/>

                <Wrapper styleString={` padding: 25px 25px;padding-top:0px; `}>
                    <TextInput onChangeText={this.onSMSCodeChange} value={smsCode}/>
                    <Button full onPress={onSMSCodeSubmit} disabled={!isSMSCodeValid}>
                        <Text styleString={` color: #fff; `}>
                            Verify SMS
                        </Text>
                    </Button> 
                </Wrapper>

                
            </Wrapper>
        )
    }
}

export default SmsCodeVerification;