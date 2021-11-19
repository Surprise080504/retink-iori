import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit {
  isLoading = false;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  async signup() {
    try {
      this.isLoading = true;
      const value = this.form.value;
      if (value.password == value.confirmPassword) {
        await this.authService.signup(value.email, value.password);
      } else {
        this.toastr.warning('Password is not match. Please try again');
      }
    } catch (e: any) {
      this.toastr.error(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
