import { Component, OnInit } from '@angular/core';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { CsvExportModule } from '@ag-grid-community/csv-export';

@Component({
  selector: 'app-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.scss']
})
export class SystemUsersComponent implements OnInit {

  colConfig = [
    { field: 'name', headerName: 'Name', headerCheckboxSelection: true, checkboxSelection: true},
    { field: 'network_name', headerName: 'Network Name'},
    { field: 'user_id', headerName: 'User ID' },
    { field: 'country', headerName: 'Country', filter: 'agSetColumnFilter', floatingFilterComponentParams: {suppressFilterButton:false} }
	];
  rowData = [
    {name: 'Abbott, Jane', user_id: 1000, network_name: 'JANE ABBOTT JANE ABBOTT JANE ABBOTT JANE ABBOTT', country: 'India'},
    {name: 'Adams, Jane', user_id: 1001, network_name: 'JANE ADAMS', country: 'India'},
    {name: 'Andrews, Jane', user_id: 1002, network_name: 'JANE ANDREWS', country: 'Pakistan'},
    {name: 'Armstrong, Jane', user_id: 1003, network_name: 'JANE ARMSTRONG', country: 'India'},
    {name: 'Austin, Jane', user_id: 1004, network_name: 'AUSTIN, JANE', country: 'India'},
    {name: 'Bailey, Jane', user_id: 1005, network_name: 'BAILEY, JANE', country: 'Australia'},
    {name: 'Baker, Jane', user_id: 1006, network_name: 'BAKER, JANE', country: 'India'},
    {name: 'Bell, Jane', user_id: 1007, network_name: 'BELL, JANE', country: 'Australia'},
    {name: 'Brooks, Jane', user_id: 1008, network_name: 'BROOKS, JANE', country: 'India'},
    {name: 'Camphell, Joe', user_id: 1009, network_name: 'CAMPHELL, Joe', country: 'Pakistan'},
    {name: 'Carter, Joe', user_id: 1010, network_name: 'CARTER, JOE', country: 'India'},
    {name: 'Collins, Joe', user_id: 1011, network_name: 'COLLINS, JOE', country: 'India'},
    {name: 'Cook, Joe', user_id: 1012, network_name: 'COOK, JOE', country: 'Pakistan'},
    {name: 'Dixon, Jane', user_id: 1013, network_name: 'DIXON, JANE', country: 'India'},
    {name: 'Dunn, Jane', user_id: 1014, network_name: 'DUNN, JANE', country: 'India'},
    {name: 'Davis, Jane', user_id: 1015, network_name: 'DAVIS, JANE', country: 'Australia'},
    {name: 'Duncan, Jane', user_id: 1016, network_name: 'DUNCAN, JANE', country: 'India'},
    {name: 'Abbott, Jane 1', user_id: 1017, network_name: 'JANE ABBOTT 1', country: 'India'},
    {name: 'Adams, Jane 1', user_id: 1018, network_name: 'JANE ADAMS 1', country: 'India'},
    {name: 'Andrews, Jane 1', user_id: 1019, network_name: 'JANE ANDREWS 1', country: 'Pakistan'},
    {name: 'Armstrong, Jane 1', user_id: 1020, network_name: 'JANE ARMSTRONG 1', country: 'India'},
    {name: 'Austin, Jane 1', user_id: 1021, network_name: 'AUSTIN, JANE 1', country: 'India'},
    {name: 'Bailey, Jane 1', user_id: 1022, network_name: 'BAILEY, JANE 1', country: 'Australia'},
    {name: 'Baker, Jane 1', user_id: 1023, network_name: 'BAKER, JANE 1', country: 'India'},
    {name: 'Bell, Jane 1', user_id: 1024, network_name: 'BELL, JANE 1', country: 'Australia'},
    {name: 'Brooks, Jane 1', user_id: 1025, network_name: 'BROOKS, JANE 1', country: 'India'},
    {name: 'Camphell, Joe 1', user_id: 1026, network_name: 'CAMPHELL, Joe 1', country: 'Pakistan'},
    {name: 'Carter, Joe 1', user_id: 1027, network_name: 'CARTER, JOE 1', country: 'India'},
    {name: 'Collins, Joe 1', user_id: 1028, network_name: 'COLLINS, JOE 1', country: 'India'},
    {name: 'Cook, Joe 1', user_id: 1029, network_name: 'COOK, JOE 1', country: 'Pakistan'},
    {name: 'Dixon, Jane 1', user_id: 1030, network_name: 'DIXON, JANE 1', country: 'India'},
    {name: 'Dunn, Jane 1', user_id: 1031, network_name: 'DUNN, JANE 1', country: 'India'},
    {name: 'Davis, Jane 1', user_id: 1032, network_name: 'DAVIS, JANE 1', country: 'Australia'},
    {name: 'Duncan, Jane 1', user_id: 1033, network_name: 'DUNCAN, JANE 1', country: 'India'}
  ];
  grid:any;
  extraModules = [SetFilterModule, CsvExportModule, ExcelExportModule];
  page = 1;
  extraConfig = {
    pagination: true,
    paginationPageSize: 10,
    suppressPaginationPanel: true,
    onPaginationChanged: () => this.onPaginationChanged()
  };
  totalRows:number = this.rowData.length;
  public excelFileParams = {
    fileName: 'system_users.xlsx'
  }
  public csvFileParams = {
    fileName: 'system_users.csv'
  }

  constructor() { /* constructor code will go here */ }

  ngOnInit(): void {
    // component initializatoin code will go here
  }

  onGridReadyCB(event:any){
    this.grid = event;
  }

  onFilterTextBoxChanged() {
    this.grid.api.setQuickFilter(
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }

  loadPage(page:number){
    this.page = page;
    this.grid.api.paginationGoToPage(page-1);
  }

  onPaginationChanged() {
    if (this.grid?.api) {
      this.totalRows = this.grid.api.getDisplayedRowCount();
    }
  }

}
