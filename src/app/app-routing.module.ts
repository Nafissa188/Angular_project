import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { GuardAdminGuard } from './guards/guard-admin.guard';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfilComponent } from './profil/profil.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  // {path:'about', component:AboutComponent,canActivate:[GuardAdminGuard]},
  {path:'profil', component:ProfilComponent
  //   path:'profil', children:[
  //   {path:'view/:name', component:ViewComponent},
  //   {path:'details', component:DetailsComponent}
  // ]
  },
  {path:'contact', redirectTo:'', pathMatch:'full'}, // redirect to another page
  {path:'**', component:PagenotfoundComponent} // path not found
  // {path:'profil/:name/:id', component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
