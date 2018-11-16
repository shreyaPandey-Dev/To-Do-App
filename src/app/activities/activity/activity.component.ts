import { Component, OnInit,  Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activityList: any =  [];
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  selectedOptions: string[] ;


  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  addActivity(activity: string) {
    if (activity) {
      this.activityList.push(activity);
          }
      }

  clearActivity(activity: string) {
    if (activity) {
      this.activityList.length = 0;
    }
  }
  onNgModelChange(event) {
    console.log('on ng model change', event);

  }

}
