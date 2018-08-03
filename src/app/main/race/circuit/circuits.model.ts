// Generated by https://quicktype.io

export interface Circuit {
    MRData: MRData;
}

export interface MRData {
    xmlns:        string;
    series:       string;
    url:          string;
    limit:        string;
    offset:       string;
    total:        string;
    CircuitTable: CircuitTable;
}

export interface CircuitTable {
    season:   string;
    Circuits: CircuitElement[];
}

export interface CircuitElement {
    circuitId:   string;
    url:         string;
    circuitName: string;
    circuitImage?: string;
    Location:    Location;
}

export interface Location {
    lat:      string;
    long:     string;
    locality: string;
    country:  string;
}