import React, {Component} from 'react';
import {Text} from '../../../components';
import {Wrapper} from '../../../layout';
import {Permissions, Camera} from 'expo';

export default class ScanQRCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderComponent: false,
            branchName: ''
        };
        this.onQRCodeRead = this
            .onQRCodeRead
            .bind(this);
    }
    async componentDidMount() {
        const {status} = await Permissions.getAsync(Permissions.CAMERA);
        if (status !== 'granted') {
            const {status: permissionRetirevalStatus} = await Permissions.askAsync(Permissions.CAMERA);

            if (permissionRetirevalStatus === 'granted') {
                console.log("Permission received");
                this.setState({renderComponent: true});
            } else 
                console.log("Permission denied ", permissionRetirevalStatus);
            }
        else 
            this.setState({renderComponent: true})
    }

    onQRCodeRead({data: branchName}) {
        this.setState({branchName});
        setTimeout(() => {
            this
                .props
                .history
                .replace('acknowledge-checkin', {...this.state, ...this.props.location.state})
        }, 4000);

    }
    render() {
        if (!this.state.renderComponent) {
            return <Wrapper>
                <Text>Getting permission to access camera or Permission is denied</Text>
            </Wrapper>
        }
        const {branchName} = this.state;

        return (
            <Wrapper
                styleString={`background-color: #76612C;; flex: 1; flex-direction: column; `}>
                <Wrapper styleString={` padding: 20px; `}>
                    <Wrapper styleString={` width: 200px; height: 200px; align-self: center;`}>
                        <Camera
                            onBarCodeRead={this.onQRCodeRead}
                            barCodeTypes={[Camera.Constants.BarCodeType.qr]}
                            ref={ref => {
                            this.camera = ref;
                        }}
                            style={{
                            height: '100%',
                            width: '100%'
                        }}></Camera>
                    </Wrapper>

                </Wrapper>
                {!this.state.branchName
                    ? <Wrapper
                            styleString={` background-color: #fff; padding: 20px; margin-bottom: 30px`}>
                            <Text styleString={` text-align: center; font-family: "hsbc rg"`}>
                                SCANNING...
                            </Text>
                        </Wrapper>
                    : null}
                {this.state.branchName
                    ? <Wrapper
                            styleString={` background-color: #fff; padding: 20px; margin-bottom: 30px;`}>
                            <Text
                                styleString={` text-align: center; font-size: 30px; font-family: "hsbc md";`}>BRANCH NAME</Text>
                            <Text
                                styleString={` text-align: center; font-size: 30px; font-family: "hsbc md";`}>
                                {branchName}
                            </Text>
                        </Wrapper>
                    : null}
                {this.state.branchName
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