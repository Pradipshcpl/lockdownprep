import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AstroRegComponent } from './astro-reg/astro-reg.component';
import { UerRegComponent } from './uer-reg/uer-reg.component';


@NgModule({
  declarations: [AdminDashboardComponent, AstroRegComponent, UerRegComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
