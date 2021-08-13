import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsComponent } from './components/docs/docs.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { IconsComponent } from './components/icons/icons.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    ExamplesComponent,
    BurgerMenuComponent,
    IconsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
