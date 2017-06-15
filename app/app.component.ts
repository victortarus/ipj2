import {Component}from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-tracker',
  template: `
<div class="container-fluid">
  <div class="hader">
    <h1>Meal Tracker</h1>
  </div>
  <div class ="ml col-md-6">
    <p>Welcome to Your daily Food journal<p>
    <p>Track down your calories.</p>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
  </div>
  <div class="nm col-md-6">
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
</div>
 `
})
export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Fries n chicken.",800),
    new Meal("Ugali managu.", 200),
    new Meal("Sambusa.", 400),
    new Meal("Sharwarma.", 1000),
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
