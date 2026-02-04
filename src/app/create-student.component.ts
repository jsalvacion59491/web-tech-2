import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  student = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gpa: '',
    status: ''
  };

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/students']);
  }

  createStudent() {
    console.log(this.student);
    this.router.navigate(['/students']);
  }
}
