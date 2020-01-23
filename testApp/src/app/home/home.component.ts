import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string = 'Submit';
  goalText: string;
  goals=[];
  constructor(private _data : DataService) { }

  ngOnInit() {    
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
    
  }

  btnClick() {
      this.goals.push(this.goalText);
      console.log(this.goals);
      this.goalText = '';      
      this._data.changeGoal(this.goals);
      this.itemCount = this.goals.length;
  }

  removeItem(i) {
    console.log(i);
    this.goals.splice(i, 1);    
    console.log(this.goals);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
    
    
  }
  

}
