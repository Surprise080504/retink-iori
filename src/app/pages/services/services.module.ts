import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-us-routing.module';
import { ServicesComponent } from './services.component';
import { SevService } from '../../core/services/sev.service';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, ServicesRoutingModule],
  providers: [SevService],
})
export class ServicesModule {}
