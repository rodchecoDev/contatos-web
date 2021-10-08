import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Company } from '../models/company.model';
import { AddEditCompany } from '../models/add-edit-company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiRoot: string;

  constructor(public http: HttpClient) {
    this.apiRoot = environment.api_url;
  }

  getCompanies(): Observable<any> {
    return this.http.get<Company[]>(this.apiRoot + 'company');
  }

  getCompany(id: number): Observable<any> {
    return this.http.get<Company>(this.apiRoot + 'company/' + id);
  }

  addCompany(addEditCompany: AddEditCompany): Observable<any> {
    return this.http.post<Company>(this.apiRoot + 'company/', addEditCompany);
  }

  editCompany(id: number, addEditCompany: AddEditCompany): Observable<any> {
    return this.http.put<Company>(this.apiRoot + 'company/' + id, addEditCompany);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete<Company>(this.apiRoot + 'company/' + id);
  }
}
