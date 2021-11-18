import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent, AuthLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, MainLayoutComponent, AuthLayoutComponent],
  providers: [],
})
export class LayoutModule {
  // To guard against a lazy loaded module re-importing GreetingModule, add the following GreetingModule constructor.
  // show this https://angular.io/guide/singleton-services
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: LayoutModule
  ) {
    if (parentModule) {
      throw new Error(
        'LayoutModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
