import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';



const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: '**', pathMatch: 'full', redirectTo:''},
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
