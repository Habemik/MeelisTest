import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser (userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

}