import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: object; 
  input: '';
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers(this.input).subscribe(data => {
      this.tweets = data; 
      });
  }


  
}
