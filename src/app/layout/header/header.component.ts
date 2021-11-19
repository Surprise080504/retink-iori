import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private unsubscribeAll: Subject<any> = new Subject<any>();

  userEmail: string | null = '';
  userEmail$ = this.authService.userEmail$.asObservable();
  isAuthenticated$ = this.authService.isAuthenticated$.asObservable();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userEmail$
      .asObservable()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(async (email) => {
        this.userEmail = email;
      });
  }

  signout() {
    this.authService.logout();
  }
}
