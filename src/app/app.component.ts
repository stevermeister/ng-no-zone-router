import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'no-zone-router';
  constructor(cd: ChangeDetectorRef) { 
    // setInterval(_ => {
    //   cd.detectChanges();
    // }, 100);
  }
}
