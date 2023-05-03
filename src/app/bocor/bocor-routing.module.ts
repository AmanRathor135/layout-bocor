import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'Home', pathMatch:'full'
  },
  {
    path:'Home', component:HomePageComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'services', component:ServicesComponent
  },
  {
    path:'portfolio', component:PortfolioComponent
  },
  {
    path:'team', component:TeamComponent
  },
  {
    path:'contact', component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BocorRoutingModule { }
