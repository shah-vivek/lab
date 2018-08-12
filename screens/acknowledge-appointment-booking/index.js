import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, CircularIcon, Text} from '../../components';
import {Wrapper} from '../../layout';

const Row = Wrapper.extend `
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export default class AcknowledgeAppointMentBooking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onAcknowledgementReceived, appointmentDetails} = this.props;
        const appointmentDate = "01-AUG-2018";
        const slot = "04:00 PM";
        const tokenNumber = "PS1010";
        return (
            <Wrapper
                styleString={`background-color: #76612C;; flex: 1; flex-direction: column; `}>
                <Wrapper styleString={` padding: 20px; `}>
                    <Wrapper
                        styleString={` padding-bottom: 40px; flex: 1; justify-content: center; align-items: center; `}>
                        <CircularIcon name="agree"/>

                    </Wrapper>
                    <Wrapper
                        styleString={` width: 100%; justify-content: center; align-items: center; margin-bottom: 15px; `}>
                        <Text fontFamily="hsbc lt" fontSize='24px' styleString={` color: #fff; `}>
                            Appointment Booked
                        </Text>

                    </Wrapper>
                    <Wrapper
                        styleString={` width: 80%; justify-content: center;align-self:center; align-items: center; margin-bottom: 30px; flex-direction: row; `}>
                        <Text
                            fontFamily="hsbc lt"
                            fontSize="22px"
                            styleString={`color: #fff; text-align: center; width: 100%;`}>
                            Once you reach branch at the booking slot, please check-in using branch QR CODE
                        </Text>

                    </Wrapper>

                </Wrapper>
                <Wrapper
                    styleString={` background-color: #fff; padding-top: 50px; padding-bottom: 50px; `}>
                    <Row styleString={` width: 80%; align-self: center; margin-bottom: 20px; `}>
                        <Text
                            styleString={` text-align: center; width: 50%; font-size: 30px; font-family: "hsbc md"; `}>DATE</Text>
                        <Text
                            styleString={` width: 50%; font-size: 20px; font-family: "hsbc md"; color: #404040;`}>
                            {appointmentDate}
                        </Text>
                    </Row>
                    <Row styleString={` width: 80%; align-self: center; `}>
                        <Text
                            styleString={` text-align: center; width: 50%; font-size: 30px; font-family: "hsbc md"; `}>TIME</Text>
                        <Text
                            styleString={` width: 50%; font-size: 24px; font-family: "hsbc rg"; color: #404040;`}>
                            {slot}
                        </Text>
                    </Row>
                </Wrapper>
                <Wrapper styleString={`margin-top: 100px;`}>
                    <Text
                        styleString={` text-align: center; font-size: 30px; font-family: "hsbc md"; color: #fff; `}>TOKEN NUMBER</Text>
                    <Text
                        styleString={` text-align: center; font-size: 30px; font-family: "hsbc md"; color: #fff;`}>
                        {tokenNumber}
                    </Text>
                </Wrapper>
                {/* <Wrapper styleString={` padding: 30px 40px; padding-top: 130px; `}>
                    <Button full onPress={() => {}}>
                        <Text styleString={` color: #fff; `}>
                            Book another appointment
                        </Text>
                    </Button>
                </Wrapper> */}
            </Wrapper>
        )
    }
}