import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItem(key: string)
	{
		try{ return JSON.parse(localStorage.getItem(key) || ''); }
		catch(error){ return localStorage.getItem(key); }
	}

	setItem(key: string, value: any)
	{
		try{ localStorage.setItem(key, JSON.stringify(value)); }
		catch(error){ console.error(error); }
	}

	removeItem(key: string)
	{
		localStorage.removeItem(key)
	}

	clear()
	{
		localStorage.clear();
	}
}
