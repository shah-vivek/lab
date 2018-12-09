import React, {Component} from 'react';
import _map from 'lodash/map';
import {Wrapper} from '../../../layout';
import {Card} from '../../../components';
import services from './data';

const onPressEventHandler = (serviceRoute, history) => {
    if(serviceRoute === "cheque-details"){
        history.push(serviceRoute)
        return;
    }
    history.push("select-branch", {
        serviceRoute: serviceRoute
    });
}

const ServiceSelection = ({location, history}) => {
    return (
        <Wrapper styleString={` padding: 30px 40px; `}>
            {_map(services, service => {
                return (<Card
                    title={service.title}
                    subtitle={service.subtitle}
                    key={service.serviceRoute}
                    onPress={() => {
                        onPressEventHandler(service.serviceRoute, history)
                    }}/>)
            })}
        </Wrapper>
    )
}

export default ServiceSelection;