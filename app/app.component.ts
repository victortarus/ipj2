import {Component}from '@angular/core';
import{Tracker}from'../app/meal.model';

@Component({
  selector: 'meal-tracker',
  template: `

<div class="container">
 <div id="header">
 <h1>Meal Tracker App</h1>
</div>
  <div>
    <label>Name:</label>
    <input type="text" ng-model="name">
  </div>
  <div>
    <label>Details:</label>
    <input type="text" ng-model='details'>
  </div>
  <div>
    <label>Calories:</label>
    <input type="number"ng-model="calories">
  </div>
  <button (click)="save()">Save</button>
  <button (click)="edit()">Edit</button>
</div>
  `
})
export class AppComponent {
mealTracker:Tracker = new Tracker("Hamburger","i wish i ate at the kibanda",550);


}
//created a tracker model by adding class definition for a tracker
