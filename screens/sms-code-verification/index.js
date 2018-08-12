import React, { Component } from 'react';
import {Button, Text, TextInput} from '../../components';
import {Wrapper} from '../../layout';


const validateSMSCode = (smsCode = "") => {
    return /^\d{8,}$/.test(smsCode);
};
class SmsCodeVerification extends Component {
    constructor (props) {
        super(props);
        this.onSMSCodeSubmit = this.onSMSCodeSubmit.bind(this);
        this.onSMSCodeChange = this.onSMSCodeChange.bind(this);
        
        this.state = {
            smsCode: props.smsCode || '',
            isSMSCodeValid: validateSMSCode(props.smsCode) || false
        }
        
    }

    onSMSCodeSubmit(){
        this.props.onSMSVerified();
    }

    onSMSCodeChange(smsCode){
        
        this.setState({
            smsCode,
            isSMSCodeValid: validateSMSCode(smsCode)
        });
    }
    
    render() {
        const {isSMSCodeValid, smsCode} = this.state;
        const {onSMSCodeSubmit} = this;
        console.log(isSMSCodeValid);
        return (
            <Wrapper styleString = {`
                padding: 30px 40px;
        
            `}>
                <Text fontFamily="hsbc ult">
                    2.    Verify by SMS
                </Text>
                <Wrapper styleString = {`
                    margin-top: 20px;
                `}>
                    <Text fontFamily="hsbc ult" fontSize = "16px" >
                        We have sent a verification code to you at mobile number ******99
                    </Text>
                </Wrapper>

                <TextInput 
                    onChangeText={this.onSMSCodeChange}
                    value={smsCode}
                />
                <Button
                    full
                    onPress={onSMSCodeSubmit}
                    disabled = {!isSMSCodeValid}
                >
                    <Text 
                        styleString={`
                            color: #fff;
                        `}
                    >
                        Verify SMS
                    </Text>
                </Button>
            </Wrapper>
        )
    }
}

export default SmsCodeVerification;