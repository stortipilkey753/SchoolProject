import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-school-project',
  templateUrl: './school-project.component.html',
  styleUrls: ['./school-project.component.css']
})
export class SchoolProjectComponent {
  onSubmit(form: NgForm) {
    const name = form.value.name;
    console.log(`Welcome ${name}`);
  }
}