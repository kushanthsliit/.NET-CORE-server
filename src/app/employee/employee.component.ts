import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../class/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = [];

  empExist = false;

  empModel = new Employee('kushan','mannar','IT','male');

  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.service.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });    
  }

  submit(){
    this.service.createEmployee(this.empModel).subscribe(data => {
      console.log(data);
      this.getData();
    });
  }
  
    deleteRecord(id){
      this.service.deleteEmployee(id).subscribe(data => {
        this.getData();
      });
    }

    getEmpData(id){
      this.service.getOneEmployee(id).subscribe(data => {
        this.empModel = data;
        this.empExist = true;
      });
    }

    updateEmp(){
      this.service.updateEmployee(this.empModel).subscribe(data => {
        this.getData();
        console.log(this.empModel);
      });
    }

}
