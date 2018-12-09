import React, {Component} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import _ from 'lodash';
import {Wrapper} from '../../layout';
import {PickerField, Text as TextBase, TextInput, Button} from '../../components';
import Signature from './signature.png';

const SignatureButton = styled.TouchableOpacity`
    border: 1px solid #AAA;
    height: 100%;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

const transferTypes = [
    {
        label: "Telegraphic Transfer",
        value: "tt"
    }, {
        label: "Demand Draft",
        value: "DD"
    }
];

const currencyList = [
    {
        label: "HKD",
        value: "hkd"
    }, {
        label: "USD",
        value: "usd"
    }

];
const countryList = [
    {
        label: "Hong Kong",
        value: "hk"
    }, {
        label: "U.S.A",
        value: "usa"
    }

];

const Text = TextBase.extend `
    margin-bottom: -20px;
    margin-top: 10px;
`
class DDTelegraphicTransfer extends Component {
    constructor(props) {
        super(props);
        const selectedTransferType = transferTypes[0].value;
        const selectedCurrency = currencyList[0].value;
        const selectedCountry = countryList[0].value;

        this.state = {
            selectedTransferType,
            selectedCurrency,
            selectedCountry,
            amount: null,
            townAndCountry: null,
            beneficiaryName: null,
            addressOfBeneficiary: null,
            nameOfRemitter: null

        };

        this.onTransferTypeChange = this
            .onTransferTypeChange
            .bind(this);

        this.onCurrencyChange = this
            .onCurrencyChange
            .bind(this);

        this.onCountryChange = this
            .onCountryChange
            .bind(this);

        this.onAmountChange = this
            .onAmountChange
            .bind(this);

        this.onTownAndCountryChange = this
            .onTownAndCountryChange
            .bind(this);

        this.onBeneficiaryNameChange = this
            .onBeneficiaryNameChange
            .bind(this);

        this.onAddressOfBeneficiaryChange = this
            .onAddressOfBeneficiaryChange
            .bind(this);

        this.onNameOfRemitterChange = this
            .onNameOfRemitterChange
            .bind(this);
    }

    onTransferTypeChange(selectedTransferType) {
        this.setState({selectedTransferType})
    }
    onCurrencyChange(selectedCurrency) {
        this.setState({selectedCurrency});
    }
    onCountryChange(selectedCountry) {
        this.setState({selectedCountry})
    }
    onAmountChange(amount) {
        this.setState({amount})
    }

    onTownAndCountryChange(townAndCountry) {
        this.setState({townAndCountry})
    }

    onBeneficiaryNameChange(beneficiaryName) {
        this.setState({beneficiaryName})
    }

    onAddressOfBeneficiaryChange(addressOfBeneficiary) {
        this.setState({addressOfBeneficiary})
    }

    onNameOfRemitterChange(nameOfRemitter) {
        this.setState({nameOfRemitter})
    }

    render() {
        const isButtonDisabled = !(this.state.amount && this.state.townAndCountry && this.state.beneficiaryName && this.state.addressOfBeneficiary && this.state.nameOfRemitter);
        const {
            selectedTransferType,
            selectedCurrency,
            selectedCountry,
            amount,
            townAndCountry,
            beneficiaryName,
            addressOfBeneficiary,
            nameOfRemitter
        } = this.state;
        return (
            <Wrapper styleString={` padding: 25px 25px; `}>
                <PickerField
                    selectedValue={selectedTransferType}
                    valueMap={transferTypes}
                    onChange={this.onTransferTypeChange}
                    label="Transfer Type"/>
                <PickerField
                    selectedValue={selectedCurrency}
                    valueMap={currencyList}
                    onChange={this.onCurrencyChange}
                    label="Currency"/>
                <Wrapper>
                    <Text fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Amount
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        value={amount}
                        onChangeText={this.onAmountChange}/>
                </Wrapper>
                <Wrapper>
                    <Text fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Town and Country where payable
                    </Text>
                    <TextInput value={townAndCountry} onChangeText={this.onTownAndCountryChange}/>
                </Wrapper>
                <Wrapper>
                    <Text fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Beneficiary name
                    </Text>
                    <TextInput value={beneficiaryName} onChangeText={this.onBeneficiaryNameChange}/>
                </Wrapper>
                <Wrapper>
                    <Text fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Address of beneficiary
                    </Text>
                    <TextInput
                        value={addressOfBeneficiary}
                        onChangeText={this.onAddressOfBeneficiaryChange}/>
                </Wrapper>
                <Wrapper>
                    <Text fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Name of remitter
                    </Text>
                    <TextInput value={nameOfRemitter} onChangeText={this.onNameOfRemitterChange}/>
                </Wrapper>
                <PickerField
                    selectedValue={selectedCountry}
                    valueMap={countryList}
                    onChange={this.onCountryChange}
                    label="Country"/>
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
                    {!this.state.isSignatureProvided
                        ? <SignatureButton
                                onPress=
                                {() => { this.setState({ isSignatureProvided: true }) }}>
                                <TextBase style= {{textAlign: 'center'}}>Please sign</TextBase>
                            </SignatureButton>
                        : <Image
                            source={Signature}
                            style={{
                            height: '100%',
                            width: '100%'
                        }}/>}
                </Wrapper>
                <Button
                    disabled={isButtonDisabled}
                    full
                    onPress={() => {
                    this
                        .props
                        .history
                        .push('/review-dd-telegraphic-transfer', {
                            ...this.state,
                            ...this.props.location.state
                        });
                }}>
                    <TextBase styleString={`color: #fff`}>
                        Review details
                    </TextBase>

                </Button>
            </Wrapper>
        )
    }
}

export default DDTelegraphicTransfer;