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
var AppComponent = (function () {
    function AppComponent() {
        this.mealTracker = new Tracker("Hamburger", "i wish i ate at the kibanda", 550);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'meal-tracker',
            template: "\n\n<div class=\"container\">\n <div id=\"header\">\n <h1>Meal Tracker App</h1>\n</div>\n  <div>\n    <label>Name:</label>\n    <input type=\"text\" ng-model=\"name\">\n  </div>\n  <div>\n    <label>Details:</label>\n    <input type=\"text\" ng-model='details'>\n  </div>\n  <div>\n    <label>Calories:</label>\n    <input type=\"number\"ng-model=\"calories\">\n  </div>\n  <button (click)=\"save()\">Save</button>\n  <button (click)=\"edit()\">Edit</button>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//created a tracker model by adding class definition for a tracker
var Tracker = (function () {
    function Tracker(name, details, calories) {
        this.name = name;
        this.details = details;
        this.calories = calories;
    }
    return Tracker;
}());
exports.Tracker = Tracker;
//# sourceMappingURL=app.component.js.map