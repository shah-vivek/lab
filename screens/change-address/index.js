import React, {Component} from 'react';
import {DatePickerAndroid, Image} from 'react-native';
import styled from 'styled-components';
import _ from 'lodash';
import moment from 'moment';
import {Wrapper} from '../../layout';
import {PickerField, Text as TextBase, TextInput, Button, DocumentScannerButton} from '../../components';
import {countryList, addressType, lineLabels} from './data';

const DatePickerField = styled.TouchableOpacity `
    height: 50px;
    width: 100%;
    border: 0;
    border-bottom-width: 1px;
    border-bottom-color: #404040;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`

const TakePicture = styled.TouchableOpacity `

`;

const Text = TextBase.extend `
    margin-bottom: -20px;
    margin-top: 10px;
`
class AddressChange extends Component {
    constructor(props) {
        super(props);
        const selectedCountry = countryList[0].value;
        const selectedAddressType = addressType[0].value;

        this.state = {
            selectedCountry,
            selectedAddressType,
            addressLines: {
                line1: null,
                line2: null,
                line3: null,
                line4: null
            },
            postalCode: null,
            effectiveDate: null,
            documentImage: null
        };
        this.onDocumentCaptured = this
            .onDocumentCaptured
            .bind(this);
        this.onCountryChange = this
            .onCountryChange
            .bind(this);

        this.onAddressTypeChange = this
            .onAddressTypeChange
            .bind(this);

        this.onAddressLineChange = this
            .onAddressLineChange
            .bind(this);

        this.onPostalCodeChange = this
            .onPostalCodeChange
            .bind(this);

        this.onEffectiveDateChange = this
            .onEffectiveDateChange
            .bind(this);
    }

    onCountryChange(selectedCountry) {
        this.setState({selectedCountry})
    }
    onAddressTypeChange(selectedAddressType) {
        this.setState({selectedAddressType});
    }
    onAddressLineChange(lineNumber, value) {
        const newAddressLines = {
            ...this.state.addressLines
        }
        newAddressLines[lineNumber] = value;
        this.setState({addressLines: newAddressLines});
    }
    onPostalCodeChange(postalCode) {
        this.setState({postalCode})
    }
    async onEffectiveDateChange() {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                // Use `new Date()` for current date. May 25 2020. Month 0 is January.
                date: new Date,
                minDate: new Date
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                this.setState({
                    effectiveDate: moment(new Date(year, month, day)).format("DD-MMM-YYYY")
                })
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }

    }

    render() {
        const isButtonDisabled = !(this.state.addressLines.line1 && this.state.addressLines.line3 && this.state.addressLines.line3 && this.state.addressLines.line4 && this.state.postalCode && this.state.effectiveDate);
        const {selectedCountry, selectedAddressType, addressLines, postalCode, effectiveDate, documentImage} = this.state;
        return (
            <Wrapper styleString={` padding: 25px 25px; `}>
                {_.map(lineLabels, (lineLabel, index) => {
                    return (
                        <Wrapper key={lineLabel}>
                            <Text fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                                {lineLabel}
                            </Text>
                            <TextInput
                                value={addressLines["line" + (index + 1)]}
                                onChangeText=
                                {(value) => { this.onAddressLineChange("line"+ (index+1), value); }}/>

                        </Wrapper>
                    );
                })}
                <Wrapper>
                    <Text fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Postal Code
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        value={postalCode}
                        onChangeText={this.onPostalCodeChange}/>

                </Wrapper>
                <Wrapper>
                    <Text fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Effective Date
                    </Text>
                    <DatePickerField onPress={this.onEffectiveDateChange}>
                        <TextBase fontSize={28}>{effectiveDate}</TextBase>

                    </DatePickerField>

                </Wrapper>
                <PickerField
                    selectedValue={selectedCountry}
                    valueMap={countryList}
                    onChange={this.onCountryChange}
                    label="Country"/>

                <PickerField
                    selectedValue={selectedAddressType}
                    valueMap={addressType}
                    onChange={this.onAddressTypeChange}
                    label="Address type"/>
                <DocumentScannerButton onDocumentCaptured={this.onDocumentCaptured}/> 
                <Button
                    disabled={isButtonDisabled}
                    full
                    onPress={() => {
                    this
                        .props
                        .history
                        .push('/review-address', {
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
    onDocumentCaptured(documentImage) {
        
        this.setState({documentImage});
        
    }
}

export default AddressChange;