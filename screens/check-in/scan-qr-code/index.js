import React, {Component} from 'react';
import {Image} from 'react-native';
import {Text} from '../../../components';
import {Wrapper} from '../../../layout';
import QRCodeImage from './qr-code.jpeg';

export default class ScanQRCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenNumber: ""
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({tokenNumber: "PS1010"})
            setTimeout(() => {
                this
                    .props
                    .history
                    .replace('acknowledge-checkin', this.state)
            }, 5000);
        }, 2000);

    }
    render() {
        const {tokenNumber} = this.state;

        return (
            <Wrapper
                styleString={`background-color: #76612C;; flex: 1; flex-direction: column; `}>
                <Wrapper styleString={` padding: 20px; `}>
                    <Wrapper styleString={` width: 200px; height: 200px; align-self: center;`}>
                        <Image source={QRCodeImage}/></Wrapper>

                </Wrapper>
                <Wrapper
                    styleString={` background-color: #fff; padding: 20px; margin-bottom: 30px`}>
                    <Text styleString={` text-align: center; font-family: "hsbc rg"`}>
                        SCANNING...
                    </Text>
                </Wrapper>
                {this.state.tokenNumber
                    ? <Wrapper
                            styleString={` background-color: #fff; padding: 20px; margin-bottom: 30px;`}>
                            <Text
                                styleString={` text-align: center; font-size: 30px; font-family: "hsbc md";`}>TOKEN NUMBER</Text>
                            <Text
                                styleString={` text-align: center; font-size: 30px; font-family: "hsbc md";`}>
                                {tokenNumber}
                            </Text>
                        </Wrapper>
                    : null}
                {this.state.tokenNumber
                    ? <Wrapper
                            styleString={` background-color: #fff; padding: 20px; margin-bottom: 30px`}>
                            <Text styleString={` text-align: center; font-family: "hsbc rg"`}>
                                Please wait while we check you in
                            </Text>
                        </Wrapper>
                    : null}

            </Wrapper>
        )
    }
}