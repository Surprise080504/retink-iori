import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUSRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUSRoutingModule],
})
export class AboutUsModule {}
