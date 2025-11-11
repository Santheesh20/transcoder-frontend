import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import _ from 'lodash';
import {
  MasterUrlService,
  MasterDataService,
  AuthService,
  ClientService,
  SnackbarService,
  ErrorMessageService
} from '../../../shared/services';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  public router = inject(Router);
  private authService = inject(AuthService);
  private masterUrl = inject(MasterUrlService);
  public masterData = inject(MasterDataService);
  private clientService = inject(ClientService);
  private snackbarService = inject(SnackbarService);
  public errorService = inject(ErrorMessageService);

  ngOnInit() {
    const me = this;
    if (me.authService.isLoggedIn()) {
      me.router.navigate([me.masterData.dashboardPath]);
    }
    me.buildForm();
  }

  buildForm() {
    const me = this;
    me.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(62)]),
      password: new FormControl('', [Validators.required])
    });
  }

  async login() {
    const me = this;
    try {
      (Object as any).values(me.loginForm.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      if (me.loginForm.invalid) {
        return console.log(me.loginForm.value);
      }
      let response = await me.clientService.postData(me.masterUrl.loginUrl, me.loginForm.value);
      await me.authService.doLogin(response);
      me.router.navigate([me.masterData.dashboardPath]);
    } catch (error) {
      me.snackbarService.snackbarError(_.get(error, 'error.message', 'Something went wrong!!'));
    }
  }
}
