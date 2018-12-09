import React, {Component} from 'react';
import {Image} from 'react-native';
import _ from 'lodash';
import {Wrapper} from '../../layout';
import {Text as TextBase, Button} from '../../components';
import {lineLabels} from '../change-address/data';
const Text = TextBase.extend `
    margin-top: 10px;
    font-family: 'hsbc rg'
`
const Row = Wrapper.extend `
    margin-bottom: 30px;
    
`;

class ReviewAddress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {addressLines, postalCode, selectedAddressType, effectiveDate, selectedCountry, documentImage} = this.props.location.state;
        return (
            <Wrapper styleString={` padding: 25px 25px; `}>
                {_.map(lineLabels, (lineLabel, index) => {
                    return (
                        <Row key={lineLabel}>
                            <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                                {lineLabel}
                            </TextBase>
                            <Text styleString={`width: 100%`}>
                                {addressLines["line" + (index + 1)]}
                            </Text>

                        </Row>
                    );
                })}
                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Postal Code
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {postalCode}
                    </Text>

                </Row>
                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Effective Date
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {effectiveDate}
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
                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Address Type
                    </TextBase>
                    <Text styleString={`width: 100%`}>
                        {selectedAddressType}
                    </Text>

                </Row>

                <Row>
                    <TextBase fontSize="16" fontFamily="hsbc lt" styleString={`width: 100%`}>
                        Document proof
                    </TextBase>
                    <Wrapper styleString={`width: 100%; margin-top: 10px;align-items: center; justify-content: center;`}>
                        <Image
                            style={{
                            height: 200,
                            width: 200
                        }}
                            source={{
                            uri: 'data:image/jpg;base64,' + documentImage.base64
                        }}/>
                    </Wrapper>
                </Row>

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

export default ReviewAddress;