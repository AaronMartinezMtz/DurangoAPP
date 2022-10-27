export interface LocationCompetidores {
    status:      boolean;
    total:       number;
    competitors: Competitor[];
}

export interface Competitor {
    _id:  string;
    Name: string;
    lat:  string;
    lng:  string;
    icon: string;
    __v:  number;
}
