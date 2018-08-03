export interface RaceModel {

    MRData: {
            xmlns: string,
            series: string,
            url: string,
            limit: string,
            offset: string,
            total: string,
            RaceTable: {
            season: string,
            Races: [
                {
                    season: string,
                    round: string,
                    url: string,
                    raceName: string,
                    Circuit: {
                    circuitId: string,
                    url: string,
                    circuitName: string,
                    circuitImage?: string,
                    Location: {
                    lat: string,
                    long: string,
                    locality: string,
                    country: string
                    }
                    },
                    date: string;
                    Results: [
                    {
                    number: string,
                    position: string,
                    positionText: string,
                    points: string,
                    Driver: {
                    driverId: string,
                    url: string,
                    givenName: string,
                    familyName: string,
                    dateOfBirth: string,
                    nationality: string
                    },
                    Constructor: {
                        constructorId: string,
                        url: string,
                        name: string,
                        nationality: string
                    };
                    grid: string;
                    laps: string;
                    status: string;
                    Time: {
                        millis: string,
                        time: string};
                    }
                ]
            }
        ]
            }
        };
    }
