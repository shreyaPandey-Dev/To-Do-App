import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activities/activity/activity.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatInputModule
    ],
    exports: [
      BrowserModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatCheckboxModule,
      MatListModule,
      MatButtonModule,
      FormsModule,
      MatInputModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
