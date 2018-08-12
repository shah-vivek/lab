import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import { Container, Header, Subtitle, Title, Left as LeftBase, Right as RightBase, Body as BodyBase, Content as ContentBase} from 'native-base';
import Wrapper from './Wrapper';

export {
    Wrapper
}

const flexStyle = `
    flex: 1;
`;

const Left = styled(LeftBase)`
    flex: 0;
`;
const Right = styled(RightBase)`
    flex: 0;
`;

const Body = styled(BodyBase)`
    ${flexStyle}
    width: 100%;
    justify-content: center;
`;





class Layout extends Component{
    render(){
        const {headerText, children, headerBGColor, subtitle, contentBackgroundColor} = this.props;
        const headerStyles = headerBGColor ? {
            backgroundColor: headerBGColor
        } : {};
        return (
            <Container>
                <Header style = {headerStyles}>
                    <Body>
                        <Title style = {{
                            alignSelf: "center"
                        }}>{headerText}</Title>
                        {subtitle ? <Subtitle style = {{
                            alignSelf: "center"
                        }}>{subtitle}</Subtitle> :null}
                    </Body>
                    
                </Header>
                <ContentBase style = {{
                    backgroundColor: contentBackgroundColor || "#fff"
                }} >
                    {children}
                </ContentBase>

            </Container>
        )
    }
}

export default Layout;