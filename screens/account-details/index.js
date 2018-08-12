import React, {Component} from 'react';
import _ from 'lodash';
import {Wrapper} from '../../../layout';
import {PickerField, Text, Button} from '../../../components';
import { dates, preferedAreas, preferedDistricts, preferedPremierCentres, branchAddresses} from './data';


class BranchSelection extends Component {
    constructor(props) {
        super(props);
        const preferedArea = preferedAreas[0].value;
        const preferedDistrict = preferedDistricts[preferedArea][0].value;;
        const preferedPremierCentre = preferedPremierCentres[preferedDistrict][0].value;
        const branchAddress = branchAddresses[preferedPremierCentre];
        this.state = {
            preferedArea,
            preferedDistrict,
            preferedPremierCentre,
            branchAddress,
            currentPreferedDistricts: preferedDistricts[preferedArea],
            currentPreferedPremierCentre: preferedPremierCentres[preferedDistrict],
            date: dates[0].value

        };
        this.onPreferedAreaChange = this
            .onPreferedAreaChange
            .bind(this);

        this.onPreferedDistrictChange = this
            .onPreferedDistrictChange
            .bind(this);

        this.onPreferedPremierCenter = this
            .onPreferedPremierCenter
            .bind(this);

        this.onDateChange = this
            .onDateChange
            .bind(this);
    }

    onDateChange(date){
        this.setState({
            date: date
        });
    }

    onPreferedAreaChange(preferedArea) {
        const preferedDistrict = preferedDistricts[preferedArea][0].value;;
        const preferedPremierCentre = preferedPremierCentres[preferedDistrict][0].value;
        const branchAddress = branchAddresses[preferedPremierCentre];
        this.setState({
            preferedArea,
            preferedDistrict,
            preferedPremierCentre,
            branchAddress,
            currentPreferedDistricts: preferedDistricts[preferedArea],
            currentPreferedPremierCentre: preferedPremierCentres[preferedDistrict]
        });
    }

    onPreferedDistrictChange(preferedDistrict) {
        const preferedPremierCentre = preferedPremierCentres[preferedDistrict][0].value;
        const branchAddress = branchAddresses[preferedPremierCentre];
        this.setState({
            preferedDistrict,
            preferedPremierCentre,
            branchAddress,
            currentPreferedPremierCentre: preferedPremierCentres[preferedDistrict]
        });
    }

    onPreferedPremierCenter(preferedPremierCentre) {
        const branchAddress = branchAddresses[preferedPremierCentre];
        this.setState({
            preferedPremierCentre,
            branchAddress
        });
    }

    render() {
        const {onBranchSelection} = this.props;
        const {
            preferedArea,
            preferedDistrict,
            preferedPremierCentre,
            branchAddress,
            currentPreferedDistricts, 
            currentPreferedPremierCentre,
            date
        } = this.state;
        return (
            <Wrapper styleString={` padding: 30px 40px; `}>
                <PickerField
                    selectedValue = {preferedArea}
                    valueMap={preferedAreas}
                    onChange={this.onPreferedAreaChange}
                    label="Prefered Area"/>

                <PickerField
                    selectedValue = {preferedDistrict}
                    valueMap={currentPreferedDistricts}
                    onChange={this.onPreferedDistrictChange}
                    label="Prefered District"/>
                <PickerField
                    selectedValue = {preferedPremierCentre}
                    valueMap={currentPreferedPremierCentre}
                    onChange={this.onPreferedPremierCenter}
                    label="Prefered Premier Center"/>
                
                <Wrapper styleString={`
                    margin-top: 20px;
                `}>
                    <Text fontSize={16} >
                        Address
                    </Text>
                </Wrapper>
                <Wrapper styleString={`
                    margin-top: 10px;
                    margin-bottom: 20px;
                `}>
                    <Text fontSize={18}>
                        {branchAddress}
                    </Text>
                </Wrapper>
                <PickerField
                    selectedValue = {date}
                    valueMap={dates}
                    onChange={this.onDateChange}
                    label="Please choose a date"/>
                <Wrapper
                    styleString = {`
                        padding: 30px 0px;
                        padding-top: 40px; 
                    `}
                >
                    <Button
                        full
                        onPress={onBranchSelection}
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

export default BranchSelection;