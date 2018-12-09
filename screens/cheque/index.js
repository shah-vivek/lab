import React, {Component} from 'react';
import {Button, ImageCaptureButton, Text} from '../../components';
import {Wrapper} from '../../layout';
import {Image} from 'react-native';
import DepositCheque from './DepositCheque';

export {DepositCheque};


const ImageCaptureButttonContainer = Wrapper.extend `
    width: 48%;
    height: 250px;
    padding: 15px;
`;

class ChequeDeposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chequeAmount: null,
            frontImageUri: null,
            backImageUri: null
        };
    }

    render() {
        return (
            <Wrapper
                styleString={` flex-direction: row; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; padding: 20px `}>
                <ImageCaptureButttonContainer>
                    {!this.state.frontImageUri
                        ? <ImageCaptureButton
                                onImageCaptured=
                                {(image) => { console.log(typeof image.base64) ;this.setState({ chequeAmount: "10,000", frontImageUri: 'data:image/jpg;base64,' + image.base64 }) }}
                                label="FRONT"/>
                        : <Image
                            style={{
                            height: '100%',
                            width: '100%'
                        }}
                            source={{
                            uri: this.state.frontImageUri
                        }}/>}
                </ImageCaptureButttonContainer>
                <ImageCaptureButttonContainer>
                    {!this.state.backImageUri
                        ? <ImageCaptureButton
                                onImageCaptured=
                                {(image) => { this.setState({ backImageUri: 'data:image/jpg;base64,' + image.base64 }) }}
                                label="BACK"/>
                        : <Image
                            style={{
                            height: '100%',
                            width: '100%'
                        }}
                            source={{
                            uri: this.state.frontImageUri
                        }}/>}
                </ImageCaptureButttonContainer>
                {this.state.chequeAmount
                    ? <Wrapper
                            styleString={`width: 100%; margin-top: 50px;`}>
                            <Text
                                styleString={` text-align: center; font-size: 30px; font-family: "hsbc md";`}>HKD {this.state.chequeAmount}</Text>
                        </Wrapper>
                    : null}
                <Wrapper styleString={`width: 100%; margin-top: 50px; align-items: center;`}>
                    <Button
                        disabled={!(this.state.frontImageUri && this.state.backImageUri)}
                        full
                        onPress={() => {
                        this
                            .props
                            .history
                            .push('/deposit-cheque', this.props.location.state);
                    }}>
                        <Text styleString={`color: #fff`}>
                            Continue
                        </Text>
    
                    </Button>
                </Wrapper>
            </Wrapper>
        )
    }
}

export default ChequeDeposit;