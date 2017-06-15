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
var meal_model_1 = require('./meal.model');
var MealComponent = (function () {
    function MealComponent() {
    }
    MealComponent.prototype.toggleDone = function (setCompleteness) {
        this.meal.done = setCompleteness;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meal_model_1.Meal)
    ], MealComponent.prototype, "meal", void 0);
    MealComponent = __decorate([
        core_1.Component({
            selector: 'meal-display',
            template: "\n  <div>\n    <label>{{ meal.description }}</label>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealComponent);
    return MealComponent;
}());
exports.MealComponent = MealComponent;
//# sourceMappingURL=meal.component.js.map