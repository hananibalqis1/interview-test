import { Injectable } from '@angular/core';
import { sample_data } from '../data';
import { Data } from '../models/Data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Data[] {
    return sample_data;
  }
}