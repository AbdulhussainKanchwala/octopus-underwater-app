import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  currentYear!: number;
  constructor () { /* constructor code will go here */ }

  ngOnInit(): void {
    this.currentYear = Date.now();
  }

}
