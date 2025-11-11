import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import _ from 'lodash';
import { MasterDataService } from './master-data';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly AUTH_TOKEN = 'AUTH_TOKEN';
    private readonly USER_DATA = 'USER_DATA';
    constructor(
        private router: Router,
        private masterData: MasterDataService,
    ) { }

    doLogin(data: any) {
        const me = this;
        me.storeUserData(_.pick(data, ['name', 'user_ref_id']));
        me.storeTokens(data);
    }

    storeUserData(data = {}) {
        const me = this;
        localStorage.setItem(me.USER_DATA, JSON.stringify(data));
    }

    getUserData() {
        const me = this;
        return JSON.parse(localStorage.getItem(me.USER_DATA) ?? '{}');
    }

    removeUserData() {
        const me = this;
        localStorage.removeItem(me.USER_DATA);
    }

    doLogout() {
        const me = this;
        me.removeUserData();
        me.removeTokens();
        me.router.navigate([me.masterData.loginPath]);
    }

    isLoggedIn() {
        const me = this;
        let user = me.getUserData();
        return _.has(user, 'user_ref_id');
    }

    getAuthToken() {
        const me = this;
        return localStorage.getItem(me.AUTH_TOKEN);
    }

    private storeTokens(tokens: any) {
        const me = this;
        if (_.has(tokens, 'auth_token')) {
            me.storeAuthToken(tokens.auth_token);
        }
    }

    private storeAuthToken(token: any) {
        const me = this;
        localStorage.setItem(me.AUTH_TOKEN, token);
    }

    removeTokens() {
        const me = this;
        localStorage.removeItem(me.AUTH_TOKEN);
    }
}