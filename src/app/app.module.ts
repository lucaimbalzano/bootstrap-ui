import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsComponent } from './components/docs/docs/docs.component';
import { ExamplesComponent } from './components/examples/examples/examples.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu/burger-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    ExamplesComponent,
    BurgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
