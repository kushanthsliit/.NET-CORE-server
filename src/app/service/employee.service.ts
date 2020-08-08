import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  private baseUrl="http://localhost:63979/api/employee/";

  public getAllEmployees(){
    return this.http.get<any>(this.baseUrl + "getallemployees");
  }

  public createEmployee(emp : Employee){
    return this.http.post<any>(this.baseUrl + "createemployee", emp);
  }

  public deleteEmployee(id : number){
    return this.http.delete(this.baseUrl + "deleteemployee/" + id);
  }

  public getOneEmployee(id : number){
    return this.http.get<any>(this.baseUrl + "getoneemployee/" + id);
  }

  public updateEmployee(emp : Employee){
    return this.http.put<any>(this.baseUrl + "updateemployee", emp);
  }
}
