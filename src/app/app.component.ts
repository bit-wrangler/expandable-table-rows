import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataSet = {
    referenceValues: [
      {"Week-to-date": 78.0}
    ],
    mainValues:{
      "Awesomeness": [
        100.0, 80.0, 92.0, 72.0, 32.0, 67.0, 74.0, 24.0
      ]
    },
    enumerables: [
      {
        "Part of day": [1,1,1,1,2,2,2,2],
        "enum":{
          1: "Before lunch",
          2: "After lunch"
        }
      }
    ]
  }
}
