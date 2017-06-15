import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h2>Add what you ate recently</h2>
    <div>
      <label>Input the foods description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>What is the meal's calories:</label>
      <input #newId>
      <button (click)="
        addClicked(newDescription.value, newId.value);
        newDescription.value='';
        newId.value='';
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(description: string, id: number) {
    var newMealToAdd: Meal = new Meal(description, id);
    this.newMealSender.emit(newMealToAdd);
  }
}
