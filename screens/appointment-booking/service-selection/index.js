import React, {Component} from 'react';
import _map from 'lodash/map';
import {Wrapper} from '../../../layout';
import {Card} from '../../../components';
import services from './data';

const ServiceSelection = ({onServiceSelection}) => {
    return (
        <Wrapper styleString={` padding: 30px 40px; `}>
            {_map(services, service => {
                return (<Card
                    title={service.title}
                    subtitle={service.subtitle}
                    key={service.serviceId}
                    onPress=
                    { (e) => { onServiceSelection(service.serviceId);}}/>)
            })}
        </Wrapper>
    )
}

export default ServiceSelection;