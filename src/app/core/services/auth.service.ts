import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userEmail$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(this.userEmail);
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isAuthenticated
  );

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {}

  get accessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  set accessToken(value: string | null) {
    localStorage.setItem('accessToken', value as string);
  }

  get userEmail(): string | null {
    return localStorage.getItem('userEmail');
  }

  set userEmail(value: string | null) {
    localStorage.setItem('userEmail', value as string);
  }

  get isAuthenticated(): boolean {
    if (this.accessToken === 'null') return false;
    return Boolean(this.accessToken);
  }

  authenticateUser(email: any, accessToken: any) {
    this.accessToken = accessToken;
    this.isAuthenticated$.next(this.isAuthenticated);
    this.userEmail = email;
    this.userEmail$.next(email);
  }

  signin(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        this.authenticateUser(value.user?.email, value.user?.refreshToken);
        this.router.navigateByUrl('');
        this.toastr.success(
          'You are sign in successfully. Welcome to visit our website!'
        );
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }

  signup(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigateByUrl('/signin');
        this.toastr.success(
          'You are registered successfully. Please try sign in with it!'
        );
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }

  logout() {
    this.accessToken = null;
    this.isAuthenticated$.next(this.isAuthenticated);
    this.userEmail = null;
    this.userEmail$.next(null);
    this.afAuth.signOut().then(() => {
      this.router.navigateByUrl('');
    });
  }
}
