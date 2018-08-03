import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Model imports
import { Eras } from './eras.model';
import { Seasons } from './season/Seasons';

// Temporary local api import
import { eras } from './era.data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GpDataService {

    selectedEra = new BehaviorSubject<Eras[]>(null);
    _api = '../../assets/api';

    constructor(private http: HttpClient) {

    }

    getEra( decade: number ) {
        const era = eras.filter((element) => element.year === decade );
        this.selectedEra.next(era);
    }

    getEras () {
        return eras;
    }

    // Return array of range of numbers
    getRange(first: number, last: number) {
        const chip: number[] = [];
        for (let i = first; i < last; i++) {
          chip.push(i);
        }
        return chip;
    }

    getSeason(year: number): Observable<Seasons> {
        return this.http.get<Seasons>(`${this._api}/seasons/${year}season.json`);
    }

    getRaces(year: number ): Observable<any> {
        return this.http.get<any>(`${this._api}/results/${year}results.json`);
    }
}
