import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .whiteLogs {
      color: white;
    }
  `]
})
export class AppComponent {
  displayDetails: boolean = true;
  count: number = 1
  logs: number[] = []

  paraToggle () {
    this.displayDetails = !this.displayDetails;
    this.logs.push(this.count++)
  }

  getColor(log) {
    return (log >= 5 ? "blue" : "white")
  }
}