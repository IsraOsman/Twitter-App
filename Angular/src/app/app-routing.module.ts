import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { TweetsComponent} from './tweets/tweets.component';
import { RandomComponent} from './random/random.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random', component: RandomComponent },
  { path: 'tweets', component: TweetsComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
