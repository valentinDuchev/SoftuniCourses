import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateComponent,
    NavbarComponent,
    RecipeCardComponent,
    FooterComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
