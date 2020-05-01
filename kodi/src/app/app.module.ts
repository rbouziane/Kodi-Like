import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MusicComponent } from './pages/music/music.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { NewpasswordComponent } from './auth/newpassword/newpassword.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent, data: {animation: 'isRight'}},
    {path: 'resetpassword', component: ResetpasswordComponent},
    {path: 'newpassword/:email', component: NewpasswordComponent},
    {path: 'register', component: RegisterComponent , data: {animation: 'isLeft'}},
    {path: 'home', component: HomeComponent, children: [
      {path: 'movies', component: MoviesComponent},
      {path: 'music', component: MusicComponent},
    ]},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MoviesComponent,
    MusicComponent,
    ResetpasswordComponent,
    NewpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
