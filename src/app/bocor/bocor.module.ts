import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BocorRoutingModule } from './bocor-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroComponent } from './hero/hero.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    HeroComponent,
    ClientsComponent,
    AboutComponent,
    ServicesComponent,
    FeaturesComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    FAQComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BocorRoutingModule,
    FormsModule
  ]
})
export class BocorModule { }
