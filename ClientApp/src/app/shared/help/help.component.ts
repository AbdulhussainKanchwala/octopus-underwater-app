import { Component, Input, OnInit } from '@angular/core';
import { fa } from '../readModel/fontAwesomeConstants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { routeHelpDataMapping } from './route-hepldata-mapping';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  @Input() field: string = '';
  @Input() showHelp:boolean = true;
  fa:any = fa;
  private helpJSONToPick:string = '';
  helpData:any;

  constructor(private _http: HttpClient, private _router: Router) { 
    this.helpJSONToPick = routeHelpDataMapping[this._router.url];
  }

  ngOnInit(): void {
    let protocol = window.location.protocol;
    let host = window.location.host;
    let helpJSONURL: string = `${protocol}//${host}/assets/help-data/${this.helpJSONToPick}.json`;
    this._http.get(helpJSONURL).subscribe(data =>{
      this.helpData = data;
    })
  }

}
