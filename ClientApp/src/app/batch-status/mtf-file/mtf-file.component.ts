import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-mtf-file',
  templateUrl: './mtf-file.component.html',
  styleUrls: ['./mtf-file.component.scss']
})
export class MtfFileComponent implements OnInit {

  loaded = false;
  pdfUrl = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
  testVariable = environment.testVariables
  constructor() { }

  ngOnInit(): void {
  }

  viewPdf() {
    this.loaded = true
  }

}
