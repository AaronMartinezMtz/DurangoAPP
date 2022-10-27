export interface LocationParks {
    status: boolean;
    total:  number;
    parks:  Park[];
}

export interface Park {
    _id:  string;
    name: string;
    lat:  string;
    lng:  string;
    icon: string;
    __v:  number;
}
