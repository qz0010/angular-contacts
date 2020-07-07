import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, NgZone, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public md = {
    login: '',
    password: ''
  };
  public fetching = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/contacts']);
    }
  }

  onSubmit() {
    this.login();
  }

  login() {
    this.fetching = true;
    this.auth.login().pipe(finalize(
        () => {
          this.fetching = false;
        }
      )).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
  }
}
