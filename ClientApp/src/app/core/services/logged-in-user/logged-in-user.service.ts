import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {

	private USER_KEY = 'token';
	private user:any;
	private token;

	constructor(
		private localStorage : LocalStorageService,
		private router: Router
	) {
		this.token = this.localStorage.getItem(this.USER_KEY);
		if(this.token){
			this.user  = this.parseJWT(this.token);
		}
	}

	/**
	 * converts token string into json format
	 * @param token token in string format
	 * @returns token object
	*/
	public parseJWT(token:string) {
		let payload = token.split('.')[1];
		payload = payload.replace(/-/g, '+').replace(/_/g, '/');
		let json = decodeURIComponent(atob(payload).split('').map(function (c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		try {
			return JSON.parse(json);
		} catch (e) {
			return {};
		}
	}

	getToken()
	{
		return this.token;
	}

	getUser()
	{
		return this.user;
	}

	setUser(token: string)
	{
		this.localStorage.setItem(this.USER_KEY, token);

		this.token = token;
		this.user  = this.parseJWT(token);
		// this.user = token
	}

	removeUser()
	{
		this.localStorage.removeItem(this.USER_KEY);
		this.user = null;
		window.location.href = environment.SSOlogout;
	}

	redirectUser()
	{
		this.user ? this.goToLanding() : this.goToLogin();
	}

	goToLanding()
	{
		//this will be the dashboard route 
		this.router.navigate(['batches/batch-status'])
	}

	goToLogin()
	{
		//the following route for the logic may different that the actual login for the each code
		window.location.href = environment.SSOlogin;
	}
}