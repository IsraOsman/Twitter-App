import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  users: object; 
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers();
  }


  
}
