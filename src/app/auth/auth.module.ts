import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

import { AuthService } from '../core/services/auth.service';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [SignInComponent, SignUpComponent],
  providers: [AuthService],
})
export class AuthModule {}
