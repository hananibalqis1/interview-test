import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './partials/header/header.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { TitleComponent } from './partials/title/title.component';
import { UserTableComponent } from './dashboard/user-table/user-table.component';
import { LoginComponent } from './login-page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ChartsComponent,
    TitleComponent,
    UserTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
