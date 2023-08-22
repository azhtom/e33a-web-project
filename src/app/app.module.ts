import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { ContactusComponent } from './public/contactus/contactus.component';
import { AboutusComponent } from './public/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './public/team/team.component';
import { ProjectNewComponent } from './admin/project/project-new/project-new.component';
import { UserNewComponent } from './admin/user/user-new/user-new.component';
import { ProjectListComponent } from './admin/project/project-list/project-list.component';
import { UserLoginComponent } from './admin/user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    TeamComponent,
    ProjectNewComponent,
    UserNewComponent,
    ProjectListComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
