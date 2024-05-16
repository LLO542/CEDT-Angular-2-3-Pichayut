import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  data: Object = {};

  constructor(private http: HttpClient) { }

  getData(url: string) {
    this.http.get(url).subscribe((data) => {
      this.data = data;
    });
    return this.data;
  }
}
