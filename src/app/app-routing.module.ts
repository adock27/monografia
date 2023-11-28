import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TailwindComponent } from './pages/tailwind/tailwind.component';
import { BoostrapComponent } from './pages/boostrap/boostrap.component';
import { ComparativeComponent } from './pages/comparative/comparative.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'comparative', component: ComparativeComponent },
  { path: 'tailwind', component: TailwindComponent },
  { path: 'boostrap', component: BoostrapComponent },
  {
    path: '**', pathMatch: 'full',
    component: InicioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
