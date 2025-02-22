var events = [
    {
        id: 122,
        title: 'Welcoming new dev 🍻',
        event_start: new Date('2020/10/01 19:00:00').getTime(),
        event_end: new Date('2020/10/01 22:00:00').getTime(),
        image_url: 'https://d24wuq6o951i2g.cloudfront.net/img/events/splash/front-end-test-beer.jpg',
        venue: {
            name: 'Splash Madrid',
            address: 'Carrera de San Jerónimo 18',
            city: 'Madrid',
            postalCode: 28014,
            region: 'Community of Madrid',
            country: 'Spain',
            lat: 40.416775,
            lon: -3.703790,
        },
        description: "Clear your calendar. Let's throw a warm welcome party for the latest dev joining our team. A super talented one that can also make jokes. It'll be fun!",
        sessions: [
            {
                id: 7,
                title: 'Sharing stories session',
                event_start: new Date('2020/10/01 19:00:00').getTime(),
                event_end: new Date('2020/10/01 20:00:00').getTime(),
            },
            {
                id: 8,
                title: 'Beer pong',
                event_start: new Date('2020/10/01 20:00:00').getTime(),
                event_end: new Date('2020/10/01 21:00:00').getTime(),
            },
            {
                id: 10,
                title: 'Pizzas',
                event_start: new Date('2020/10/01 21:00:00').getTime(),
                event_end: new Date('2020/10/01 22:00:00').getTime(),
            },
        ],
    },
    {
        id: 145,
        title: 'Manhattanhenge',
        event_start: new Date('2020/07/13 20:20:00').getTime(),
        event_end: new Date('2020/07/13 20:21:00').getTime(),
        image_url: 'https://d24wuq6o951i2g.cloudfront.net/img/events/splash/front-end-test-manhattan.jpg',
        venue: {
            name: 'Manhattan',
            address: null,
            city: 'New York',
            postalCode: null,
            region: 'NY',
            country: 'United States',
            lat: 40.416775,
            lon: 3.703790,
        },
        description: "Manhattanhenge, also called the Manhattan Solstice, is an event during which the setting sun or the sunrise is aligned with the east–west streets of the main street grid of Manhattan, New York City.",
        sessions: [],
    },
    {
        id: 166,
        title: 'Chinese New Year 🇨🇳',
        event_start: new Date('2020/02/16 00:00:00').getTime(),
        event_end: null,
        image_url: 'https://d24wuq6o951i2g.cloudfront.net/img/events/splash/front-end-test-china.jpg',
        venue: null,
        description: 'Chinese New Year, also known as the "Spring Festival" in modern China, is an important Chinese festival celebrated at the turn of the traditional lunisolar Chinese calendar.',
        sessions: [],
    },
    {
        id: 167,
        title: 'Codemotion Madrid 2020',
        event_start: new Date('2020/11/24 10:00:00').getTime(),
        event_end: new Date('2020/11/25 20:00:00').getTime(),
        image_url: 'https://d24wuq6o951i2g.cloudfront.net/img/events/splash/front-end-test-codemotion.jpg',
        venue: {
            name: null,
            address: null,
            city: 'Madrid',
            postalCode: null,
            region: 'Community of Madrid',
            country: 'Spain',
            lat: 40.416775,
            lon: 3.703790,
        },
        description: "https://www.codemotion.com/",
        sessions: [
            {
                id: 43,
                title: 'First Day',
                event_start: new Date('2020/11/24 10:00:00').getTime(),
                event_end: new Date('2020/11/24 20:00:00').getTime(),
            },
            {
                id: 45,
                title: 'Second Day',
                event_start: new Date('2020/11/25 10:00:00').getTime(),
                event_end: new Date('2020/11/25 20:00:00').getTime(),
            },
        ],
    },
    {
        id: 200,
        title: 'Reactive Conf 2020',
        event_start: new Date('2020/10/25 00:00:00').getTime(),
        event_end: new Date('2020/10/27 00:00:00').getTime(),
        image_url: 'https://d24wuq6o951i2g.cloudfront.net/img/events/splash/front-end-test-react.png',
        venue: {
            name: null,
            address: null,
            city: 'Bratislava',
            postalCode: null,
            region: 'Bratislava',
            country: 'Slovakia',
            lat: null,
            lon: null,
        },
        description: "Discuss the future of development with tech leaders from across the world. Join us on October 25 to 27 in Bratislava, Slovakia. https://reactiveconf.com/",
        sessions: [
            {
                id: 79,
                title: 'First Day',
                event_start: new Date('2020/10/25 00:00:00').getTime(),
                event_end: null,
            },
            {
                id: 81,
                title: 'Second Day',
                event_start: new Date('2020/11/26 00:00:00').getTime(),
                event_end: null,
            },
            {
                id: 82,
                title: 'Third Day',
                event_start: new Date('2020/11/27 00:00:00').getTime(),
                event_end: null,
            },
            {
                id: 83,
                title: 'Extra Workshop: Introduction to Elm',
                event_start: new Date('2020/11/26 10:00:00').getTime(),
                event_end: new Date('2020/11/26 14:00:00').getTime(),
            },
        ],
    },
    {
        id: 10,
        title: 'A talk about coffee',
        event_start: new Date('2020/11/02 10:15:00').getTime(),
        event_end: null,
        image_url: 'https://d24wuq6o951i2g.cloudfront.net/img/events/splash/front-end-test-coffee.jpg',
        venue: {
            name: 'Splash Madrid',
            address: 'Carrera de San Jerónimo 18',
            city: 'Madrid',
            postalCode: 28014,
            region: 'Community of Madrid',
            country: 'Spain',
            lat: 40.416775,
            lon: -3.703790,
        },
        description: "A developer is a wizzard that turns ☕️ into </>. True or false? We'll discuss.",
        sessions: [],
    },
];

module.exports = {
    events: events,
};
