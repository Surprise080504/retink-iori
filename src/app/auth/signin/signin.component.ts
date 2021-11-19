import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent implements OnInit {
  isLoading = false;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async login() {
    // this.toastr.error('Danger', 'This is a error message.');
    try {
      this.isLoading = true;
      const value = this.form.value;
      await this.authService.signin(value.email, value.password);
    } catch (e: any) {
      this.toastr.error(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
