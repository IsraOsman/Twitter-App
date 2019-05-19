import { Injectable } from '@angular/core';
import { tweetSearch } from '/ServerFile/index.js';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: tweetSearch ) { 
    getUsers(){
      return this.http.get('https://api/tweets')
    }
  }
}
