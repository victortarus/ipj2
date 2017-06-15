import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { MealComponent } from './meal.component';
import { CompletePipe } from './complete.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    EditMealComponent,
    NewMealComponent,
    MealComponent,
    CompletePipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
