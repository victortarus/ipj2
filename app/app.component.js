"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('../app/meal.model');
var AppComponent = (function () {
    function AppComponent() {
        this.mealTracker = new meal_model_1.Tracker("Hamburger", "i wish i ate at the kibanda", 550);
        this.get = new meal_model_1.Tracker('vic', 'Hamburger', 500);
        this.submitted = false;
    }
    AppComponent.prototype.onsubmit = function () { this.submitted = true; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'meal-tracker',
            template: "\n  <div class=\"container\">\n      <h1>Track your calories</h1>\n      <form (ngSubmit)=onSubmit() #allform=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" required ngModel=\"Tracker.name\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"details\">Details</label>\n          <input type=\"text\" class=\"form-control\" id=\"details\" ngModel=\"Tracker.details\">\n        </div>\n        <div>\n          <label for=\"calories\">Calories</label>\n          <input type=\"number\" class=\"form-control\" id=\"calories\" required ngModel=\"Tracker.calories\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n      </form>\n  </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//created a tracker model by adding class definition for a tracker
//# sourceMappingURL=app.component.js.map