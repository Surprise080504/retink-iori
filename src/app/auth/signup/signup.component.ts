import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit {
  isLoading = false;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  async login() {
    // this.toastr.error('Danger', 'This is a error message.');
    try {
      this.isLoading = true;
      const value = this.form.value;
      // await this.authService.login(value.email, value.password).toPromise();
      // this.router.navigate(['/']);
    } catch (e) {
      // this.toastr.danger(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
