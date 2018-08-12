import moment from 'moment';


const preferedAreas = [{
        label: "Hong Kong Island",
        value: "hk-island"
    },
    {
        label: "Kowloon",
        value: "kowloon"
    }
];

const preferedDistricts = {
    "hk-island": [{
        "value": "causeway-bay--wanchai",
        "label": "Causeway Bay / Wanchai"
    }, {
        "value": "central",
        "label": "Central"
    }],
    "kowloon": [{
        "value": "kowloon-tong--kwun-tong",
        "label": "Kowloon Tong / Kwun Tong"
    }, {
        "value": "mong-kok--mei-foo",
        "label": "Mong Kok / Mei Foo"
    }]
}

const preferedPremierCentres = {
    "causeway-bay--wanchai": [{
        "value": "causeway-bay-hsbc-premier-centre",
        "label": "Causeway Bay HSBC Premier Centre"
    }, {
        "value": "convention-plaza-hsbc-premier-centre",
        "label": "Convention Plaza HSBC Premier Centre"
    }],
    "central": [{
        "value": "central-hsbc-premier-centre",
        "label": "Central HSBC Premier Centre",
    }, {
        "value": "des-voeux-road-central-hsbc-premier-centre",
        "label": "Des Voeux Road Central HSBC Premier Centre"
    }],
    "kowloon-tong--kwun-tong": [{
        "value": "east-point-city-hsbc-premier-centre",
        "label": "East Point City HSBC Premier Centre"
    }, {
        "value": "festival-walk-hsbc-premier-centre",
        "label": "Festival Walk HSBC Premier Centre"
    }],
    "mong-kok--mei-foo": [{
        "value": "cheung-sha-wan-hsbc-premier-centre",
        "label": "Cheung Sha Wan HSBC Premier Centre"
    }, {
        "value": "mei-foo-sun-chuen-hsbc-premier-centre",
        "label": "Mei Foo Sun Chuen HSBC Premier Centre"
    }]

};

const branchAddresses = {
    "causeway-bay-hsbc-premier-centre" : "Causeway Bay",
    "convention-plaza-hsbc-premier-centre": "Convention Plaza",
    "central-hsbc-premier-centre": "Central HSBC Premier Centre",
    "des-voeux-road-central-hsbc-premier-centre": "Des Voeux Road Central HSBC Premier Centre",
    "east-point-city-hsbc-premier-centre": "East Point City HSBC Premier Centre",
    "festival-walk-hsbc-premier-centre": "Festival Walk HSBC Premier Centre",
    "cheung-sha-wan-hsbc-premier-centre": "Cheung Sha Wan HSBC Premier Centre",
    "mei-foo-sun-chuen-hsbc-premier-centre": "Mei Foo Sun Chuen HSBC Premier Centre"
};

const dates = [];

((moment, dates) => {
    const start = moment(new Date, 'DD-MM-YYYY');

    dates.push({
        label: start.format("dddd, MMMM Do YYYY"),
        value: start.toDate()
    })
    
    for(var i = 1 ; i <= 10; i ++){
        const day = start.add(1, 'days');
        dates.push({
            value: day.toDate(),
            label: day.format("dddd, MMMM Do YYYY")
        });
    }
})(moment, dates);

export {
    preferedAreas,
    preferedDistricts,
    preferedPremierCentres,
    branchAddresses,
    dates
}