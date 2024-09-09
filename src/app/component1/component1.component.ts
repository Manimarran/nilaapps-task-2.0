import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {

  creditList = [
    {
      label: "Lecture",
      value: "3"
    },
    {
      label: "Tutorial",
      value: "0"
    },
    {
      label: "Practical",
      value: "1"
    },
    {
      label: "Project",
      value: "0"
    }
  ]

  courseOutcomes = ["CO2", "CO4", "CO5", "CO7", "CO13", "CO14"];
  mappedCourses = ["PO7", "PO4", "PO5", "PO7", "PO13", "PO14"];
}
