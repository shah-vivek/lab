import React, {Component} from 'react';
import styled from 'styled-components';
import {Button} from 'native-base';
import Text from '../text';
import Icon from '../icon';
import {Wrapper} from '../../layout';
import {Permissions, Camera} from 'expo';
import {Modal} from 'react-native';
import SelectableButton from './SelectableButton';
import ImageCaptureButton from './ImageCaptureButton';


const SButton = styled(Button)`
    ${props => props.disabled

    ? "opacity: 0.5;"
    : ""}
`;

export default SButton;


const DocumentScannerButtonContainer = styled.TouchableOpacity `
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 15px;
    border: 1px solid #AAA;
    margin-bottom: 20px;
    margin-top: 20px;
`;

/* const DocumentScannerButton = (props) => {

    return (
        <DocumentScannerButtonContainer {...props} >
            <Text styleString={`
                width: 65%;
            `}>
                Capture Document Proof
            </Text>
            <Wrapper styleString = {`width: 35%; flex-direction: row; justify-content: flex-end`}>
                <Icon name="camera" size={30} />
            </Wrapper>

        </DocumentScannerButtonContainer>
    )
}; */

class DocumentScannerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderComponent: false,
            showCamera: false,
            documentProofImagePhoto: null
        };
        
        this.takePicture = this
            .takePicture
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

    async takePicture() {
        if (this.camera) {
            console.log('Take picture');
            const photo = await this
                .camera
                .takePictureAsync({base64 : true});
            this.setState({showCamera: false, documentProofImagePhoto: photo});
            this.props.onDocumentCaptured(photo);
        }
    }
    
    componentDidUpdate(){
        //this.state.documentProofImagePhoto && this.props.onDocumentCaptured(this.state.documentProofImagePhoto);
    }
    render() {
        if (!this.state.renderComponent) {
            return <Text>Getting permission for accessing the camera</Text>;
        }
        console.log('rendering camera components');
        return (
            <Wrapper>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.showCamera}>
                    <Wrapper
                        styleString={`height: 100%; width: 100%; background-color:white; opacity: 1`}>

                        <Camera
                            style={{
                            height: '80%',
                            width: '100%'
                        }}
                            ref={ref => {
                            this.camera = ref;
                        }}/>
                        <SelectableButton onPress={this.takePicture}>
                            <Text>
                                Take picture
                            </Text>

                        </SelectableButton>

                    </Wrapper>
                </Modal>

                <DocumentScannerButtonContainer
                    onPress={() => {
                    this.setState({showCamera: true})
                }}>
                    <Text styleString={` width: 65%; `}>
                        Capture Document Proof
                    </Text>
                    <Wrapper
                        styleString={`width: 35%; flex-direction: row; justify-content: flex-end`}>
                        <Icon name="camera" size={30}/>
                    </Wrapper>

                </DocumentScannerButtonContainer>

            </Wrapper>
        )
    };
}
export {SelectableButton, DocumentScannerButton, ImageCaptureButton};