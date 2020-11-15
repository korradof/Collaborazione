import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {asObservable} from './asObservable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //data: employee [] = [];
  constructor(private http: HttpClient) { }

  getEmployees() {
    return asObservable (this.http.get('./impiegati'))
  }

}
export interface employee {
  IDEmployee: number;
  FirstName: string;
  LastName: string
}

export interface employees {
  items: employee[];
  total_count: number
}