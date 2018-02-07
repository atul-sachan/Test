import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(`${this.ROOT_URL}/posts`);
  }
}
