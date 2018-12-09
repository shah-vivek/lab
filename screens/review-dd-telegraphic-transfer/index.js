import React, {Component} from 'react';
import {Image} from 'react-native';
import _ from 'lodash';
import {Wrapper} from '../../layout';
import {Text as TextBase, Button} from '../../components';
import Signature from './signature.png';

const Text = TextBase.extend `
    margin-top: 10px;
    font-family: 'hsbc rg'
`
const Row = Wrapper.extend `
    margin-bottom: 30px;
    
`;

class ReviewDDTelegraphicTransfer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            selectedTransferType,
            selectedCurrency,
            selectedCountry,
            amount,
            townAndCountry,
            beneficiaryName,
            addressOfBeneficiary,
            nameOfRemitter
        } = this.props.location.state;
        return (
            <Wrapper styleString={` padding: 25px 25px; `}>

                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Transfer Type
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {selectedTransferType}
                    </Text>

                </Row>
                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Currency
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {selectedCurrency}
                    </Text>

                </Row>

                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Amount
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {amount}
                    </Text>

                </Row>

                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Town and Country where payable
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {townAndCountry}
                    </Text>
                </Row>

                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Beneficiary name
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {beneficiaryName}
                    </Text>
                </Row>

                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Address of beneficiary
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {addressOfBeneficiary}
                    </Text>
                </Row>

                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Name of remitter
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {nameOfRemitter}
                    </Text>
                </Row>

                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Country
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {selectedCountry}
                    </Text>

                </Row>
                <Wrapper
                    styleString={`
                    height: 40px;
                    width: 100%;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;

                `}>
                    <Image
                            source={Signature}
                            style={{
                            height: '100%',
                            width: '100%'
                        }} />
                </Wrapper>
                <Button
                    disabled={false}
                    full
                    onPress={() => {
                    this
                        .props
                        .history
                        .push('/acknowledge-appointment-booking', this.props.location.state);
                }}>
                    <TextBase styleString={`color: #fff`}>
                        Book appointment
                    </TextBase>

                </Button>
            </Wrapper>
        )
    }
}

export default ReviewDDTelegraphicTransfer;