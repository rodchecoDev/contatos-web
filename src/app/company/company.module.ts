import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CompanyRoutingModule } from './company-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyService } from '../services/company.service';


@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [CompanyService]
})
export class CompanyModule { }
