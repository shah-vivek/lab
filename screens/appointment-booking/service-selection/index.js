import React, {Component} from 'react';
import _map from 'lodash/map';
import {Wrapper} from '../../../layout';
import {Card} from '../../../components';
import services from './data';

const ServiceSelection = ({location, history}) => {
    return (
        <Wrapper styleString={` padding: 30px 40px; `}>
            {_map(services, service => {
                return (<Card
                    title={service.title}
                    subtitle={service.subtitle}
                    key={service.serviceId}
                    onPress=
                    { (e) => { history.push(service.serviceRoute, location.state);}}/>)
            })}
        </Wrapper>
    )
}

export default ServiceSelection;