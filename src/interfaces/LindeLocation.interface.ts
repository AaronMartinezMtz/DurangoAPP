export interface LocationsLinde {
    status:    boolean;
    total:     number;
    locations: Location[];
}

export interface Location {
    _id:  string;
    Name: string;
    lat:  string;
    lng:  string;
    icon: string;
    __v:  number;
}



