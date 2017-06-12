import {Component}from '@angular/core';
import{Tracker}from'../app/meal.model';

@Component({
  selector: 'meal-tracker',
  template: `
  <div class="container">
      <h1>Track your calories</h1>
      <form (ngSubmit)=onSubmit() #allform="ngForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required ngModel="Tracker.name">
        </div>

        <div class="form-group">
          <label for="details">Details</label>
          <input type="text" class="form-control" id="details" ngModel="Tracker.details">
        </div>
        <div>
          <label for="calories">Calories</label>
          <input type="number" class="form-control" id="calories" required ngModel="Tracker.calories">
        </div>
        <button type="submit" class="btn btn-success">Submit</button>

      </form>
  </div>

  `
})
export class AppComponent {
mealTracker:Tracker = new Tracker("Hamburger","i wish i ate at the kibanda",550);
get =new Tracker('vic','Hamburger',500);
submitted=false;
onsubmit(){this.submitted=true;}

}
//created a tracker model by adding class definition for a tracker
