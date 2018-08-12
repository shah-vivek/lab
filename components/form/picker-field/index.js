import React, {Component} from 'react';
import _ from 'lodash';
import {Picker} from 'react-native';
import {Wrapper} from '../../../layout';
import {Text} from '../../../components';
import Icon from '../../icon';

const PickerWrapper = Wrapper.extend`
    width: 100%;
    border-color: #d2d2d2;
    border-width: 1px;
    border-style: solid;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    margin-top: 10px;
    padding-right: 10px;

`;


const PickerField = class extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidUpdate() {
        
    }
    render() {
        const {valueMap, label, placeholder} = this.props;
        return (
            <Wrapper styleString = {`
                margin-top: 20px;
                margin-bottom: 20px;
            `}>
                <Wrapper>
                    <Text styleString={` font-size: 16px; font-family: 'hsbc lt' `}>
                        {label}
                    </Text>
                </Wrapper>
                <PickerWrapper>
                    <Picker
                        placeholder={placeholder || "Please select a value"}
                        placeholderStyle={{
                        color: "#bfc6ea"
                    }}
                        selectedValue={this.props.selectedValue}
                        onValueChange={this.props.onChange}
                        style={{
                            width: "80%",
                            backgroundColor: "transparent"
                        }}
                    >
                        {_.map(valueMap, (item) => (
                            <Picker.Item
                            key={item.value}
                            label={item.label}
                            value={item.value}
                            />
                        ))}
                    </Picker>
                    <Icon 
                        name='chevron-down' 
                        size = {22}  
                        styleString = {`
                            align-self: center;
                        `}    
                    />
                </PickerWrapper>

            </Wrapper>

        );
    }

}

export default PickerField;