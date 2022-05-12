import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatListItem } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import {MatSidenavModule} from '@angular/material/sidenav';


import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CountryComponent } from './components/country/country.component';
import { ServiceComponent } from './country/service/service.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    CountryComponent,
    ServiceComponent
    //NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,    
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,

    //MatButton,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
