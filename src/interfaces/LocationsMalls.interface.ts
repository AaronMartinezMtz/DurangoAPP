export interface LocationMalls {
    status: boolean;
    total:  number;
    malls:  Mall[];
}

export interface Mall {
    _id:  string;
    name: string;
    lat:  string;
    lng:  string;
    icon: string;
    __v:  number;
}
