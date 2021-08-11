import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DocsComponent } from './components/docs/docs.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { IconsComponent } from './components/icons/icons.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: AppComponent
},
{
  path:'docs',
  component: DocsComponent
},
{
  path: 'icons',
  component: IconsComponent
},
{
  path: 'example',
  component: ExamplesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
