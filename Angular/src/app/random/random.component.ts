import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  $randomTweets: object; 
  constructor(private randomData: DataService) { }

  ngOnInit() {
    
  }
  randomTweet(){
  this.randomData.getTweets().subscribe(randomData => {
    console.log('My random +', randomData);
    this.$randomTweets = randomData; 
    });
  }
}
