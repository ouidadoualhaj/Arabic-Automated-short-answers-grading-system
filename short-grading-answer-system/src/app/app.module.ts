import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { LayoutComponent } from './sharedComponents/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionSectionComponent } from './components/question-section/question-section.component';
import { AnswerComponent } from './components/answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuestionSectionComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
