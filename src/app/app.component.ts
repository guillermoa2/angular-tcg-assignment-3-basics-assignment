import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayDetails: boolean = false;
  count: number = 1
  logs: Date[] = []

  paraToggle () {
    this.displayDetails = !this.displayDetails;
    this.logs.push(new Date())
  }

  getColor(log) {
    return (log >= 4 ? "blue" : "white")
  }
}