export interface LocationsSchools {
    status:  boolean;
    total:   number;
    schools: School[];
}

export interface School {
    _id:  string;
    name: string;
    lat:  string;
    lng:  string;
    icon: string;
    __v:  number;
}
