import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) {
    
  }

  getUsers(input){
    return this.http.get('/api/tweets?input=' +input);
  }

  getTweets(){
    return this.http.get('http://localhost:3000/api/random');
  }
}
