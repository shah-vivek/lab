import React, {Component} from 'react';
import _ from 'lodash';
import {Wrapper} from '../../../layout';
import {SelectableButton, Button, Text} from '../../../components';
import availableTimeSlots from './data';
import _map from 'lodash/map';


class TimeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSlot: null
        }
        this.onSlotChanged = this.onSlotChanged.bind(this);
    }

    onSlotChanged(slotNo){
        console.log("Slot changed", slotNo);
        this.setState({
            selectedSlot: slotNo
        });
    }


    

    render() {
        const {onSlotChanged} = this;
        const {
            selectedSlot
        } = this.state;
        const serviceSelectionState = {
            selectedSlot,
            ...this.props.location.state
        }
        return (
            <Wrapper styleString={` 
                        padding: 30px 40px; 
            `}>
                <Wrapper styleString = {`
                        width: 100%;
                        flex-direction: row;
                        align-content: center;
                        margin: 20px 0;
                `}>
                    <Wrapper styleString = {`
                        width: 50%;
                        align-content: center;
                        justify-content: flex-start;
                        flex-direction: row;
                    `}>
                        <Wrapper styleString = {`
                            width: 30px;
                            height: 30px;
                            border-color: #D7D8D6;
                            border-width: 1;
                            margin-right: 10px;
                        `} />
                        <Text styleString = {`
                            align-self: center;
                        `}>Available</Text>
                    </Wrapper>
                    <Wrapper styleString = {`
                        width: 50%;
                        align-content: center;
                        justify-content: flex-start;
                        flex-direction: row;
                    `}>
                        <Wrapper styleString = {`
                            width: 30px;
                            height: 30px;
                            background-color: #F9F9F9;
                            border-color: #AAA;
                            border-width: 1px;
                            margin-right: 10px;
                        `} />
                        <Text styleString = {`
                            align-self: center;
                        `}>Unavailable</Text>
                    </Wrapper>
                    
                </Wrapper>
                <Wrapper slotContainer
                         styleString = {`
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            align-items: center;
                         
                         `}   
                >
                    {_map(availableTimeSlots, (slotConfig) => {
                        const isSelected = slotConfig.slotNo === selectedSlot;
                        const isDisabled = !slotConfig.isAvailable;
                        const slotButtonProps = {
                            selected: isSelected,
                            disabled: isDisabled,
                            onPress: () => onSlotChanged(slotConfig.slotNo)
                        }

                        const textColor = isDisabled ? 'color: #AAA' : isSelected ? 'color: #fff' : '';
                        return (
                            <Wrapper key = {
                                slotConfig.slotNo
                            } styleString = {`
                                
                                width: 33%;
                                padding: 5px;
                            
                            `}>
                                <SelectableButton {...slotButtonProps}>
                                    <Text
                                        styleString = {
                                            `
                                                ${textColor}
                                            `
                                        }
                                    >
                                        {slotConfig.label}
                                    </Text>

                                </SelectableButton>

                            </Wrapper>
                        )
                    })}
                </Wrapper>
                <Wrapper
                    styleString = {`
                        padding: 30px 0px;
                        padding-top: 40px;
                    `}
                >
                    <Button
                        full
                        onPress={() => {
                            console.log('state to be pased to next screen ', serviceSelectionState);
                            this.props.history.push('/select-service',serviceSelectionState);
                        }}
                    >
                        <Text 
                            styleString={`
                                color: #fff;
                            `}
                        >
                            Continue
                        </Text>
                    </Button>
                </Wrapper>
            </Wrapper>
        )
    }
}

export default TimeSelection;