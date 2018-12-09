import React, {Component} from 'react';
import styled from 'styled-components';
import {Permissions, Camera} from 'expo';
import {Wrapper} from '../../layout';
import {Modal} from 'react-native';
import Text from '../text';
import Icon from '../icon';
import SelectableButton from './SelectableButton';

const ImageCaptureButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 99%;
    justify-content: flex-end;
    padding: 15px;
    margin-bottom: 20px;
    margin-top: 20px;   
`;



export default class ImageCaptureButtton extends Component {
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
            this.props.onImageCaptured(photo);
        }
    }
    
    
    render() {
        if (!this.state.renderComponent) {
            return <Text>Getting permission for accessing the camera</Text>;
        }
        const {label} =  this.props;
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

                <ImageCaptureButtonContainer
                    onPress={() => {
                    this.setState({showCamera: true})
                }}>
                    <Wrapper
                        styleString={`width: 100%;height: 80%;flex-direction: row; justify-content: center; align-items:center;`}>
                        <Icon name="camera" size={60}/>
                    </Wrapper>
                    <Wrapper styleString={`height: 20%;width: 100%;`}>
                        <Text styleString={`text-align: center;`}>
                            {label}
                        </Text>
                    </Wrapper>
                    

                </ImageCaptureButtonContainer>

            </Wrapper>
        )
    };
}