import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {
  submitedFlag: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitedFlag = true;

    alert("No flight available!");
  }
}
