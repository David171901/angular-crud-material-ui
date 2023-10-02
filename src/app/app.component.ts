import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-crud-material-ui';

  constructor(public dialog: MatDialog, private _empService: EmployeeService) { }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(EmpAddEditComponent, {});
  }

  ngOnInit(): void {
    this.getEmployeeList()
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        console.log("🚀 ~ file: app.component.ts:22 ~ AppComponent ~ this._empService.getEmployeeList ~ res:", res)
      },
      error: (err) => {
        console.error(err)
      }
    });
  }
}
