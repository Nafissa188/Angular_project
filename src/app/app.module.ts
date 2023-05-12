import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProfilComponent,
    PagenotfoundComponent,
    ViewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:LocationStrategy,useClass:HashLocationStrategy}//sécurité lel les hackeur nzidou # fl link
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
