import React, {Component} from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import {
    Container,
    Header,
    Subtitle,
    Title,
    Body as BodyBase,
    Content as ContentBase
} from 'native-base';
import Wrapper from './Wrapper';

export {Wrapper}

const flexStyle = `
    flex: 1;
`;



const Body = styled(BodyBase)`
    ${flexStyle}
    width: 100%;
    justify-content: center;
`;

const screenHLayoutConfig = {
    "select-service-area": {
        headerText: "Select Service Area",
        headerBGColor: "#262626"
    },
    "verify-account-details": {
        headerText: "Mobile Security",
        headerBGColor: "#262626"
    },
    "verify-sms-code": {
        headerText: "Mobile Security",
        headerBGColor: "#262626"
    },
    "acknowledge-activation": {
        headerText: "Mobile Security",
        headerBGColor: "#262626"
    },
    "select-branch": {
        headerText: "Book Appointment",
        subtitle: "Select Branch",
        headerBGColor: "#262626"
    },
    "select-time": {
        headerText: "Book Appointment",
        subtitle: "Prefered Time",
        headerBGColor: "#262626"
    },
    "select-service": {
        headerText: "Select Service",
        headerBGColor: "#262626"
    },
    "cash-deposit": {
        headerText: "Cash Deposit",
        "subtitle": "Enter Denominations",
        headerBGColor: "#262626"
    },
    "cheque-details": {
        headerText: "Cheque Deposit",
        headerBGColor: "#262626"
    },
    "deposit-cheque": {
        headerText: "Cheque Deposit",
        headerBGColor: "#262626"
    },
    "acknowledge-appointment-booking": {
        headerText: "Token Generated",
        headerBGColor: "#262626",
        contentBackgroundColor: "#76612C"
    },
    "change-address": {
        headerText: "Address Change",
        subtitle: "Enter details",
        headerBGColor: "#262626"
    },
    "review-address": {
        headerText: "Review Address",
        headerBGColor: "#262626"
    },
    "scan-qr-code": {
        headerText: "SCAN BRANCH QR CODE TO CHECKIN",
        headerBGColor: "#262626",
        contentBackgroundColor: "#76612C"
    },
    "acknowledge-checkin": {
        headerText: "CHECKIN COMPLETE",
        headerBGColor: "#262626",
        contentBackgroundColor: "#76612C"
    },
    "dd-telegraphic-transfer": {
        headerText: "Telegraphic Transfer/DD",
        subtitle: "Enter Details",
        headerBGColor: "#262626"
    },
    "review-dd-telegraphic-transfer": {
        headerText: "Telegraphic Transfer/DD",
        subtitle: "Review Details",
        headerBGColor: "#262626"
    }
};

class Layout extends Component {

    render() {
        const currentRoute = this
            .props
            .location
            .pathname
            .substring(1) || 'verify-account-details';
        console.log('current route is ', currentRoute);
        const {headerText, headerBGColor, subtitle, contentBackgroundColor} = screenHLayoutConfig[currentRoute];
        const {children} = this.props;
        const headerStyles = headerBGColor
            ? {
                backgroundColor: headerBGColor
            }
            : {};
        return (
            <Container>
                <Header style={headerStyles}>
                    <Body>
                        <Title
                            style={{
                            alignSelf: "center"
                        }}>{headerText}</Title>
                        {subtitle
                            ? <Subtitle
                                    style={{
                                    alignSelf: "center"
                                }}>{subtitle}</Subtitle>
                            : null}
                    </Body>

                </Header>
                <ContentBase
                    style={{
                    backgroundColor: contentBackgroundColor || "#fff"
                }}>
                    {children}
                </ContentBase>

            </Container>
        )
    }
}

export default withRouter(Layout);