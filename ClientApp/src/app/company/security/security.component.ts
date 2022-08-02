import { IServerSideDatasource } from '@ag-grid-community/core';
import { CsvExportModule } from '@ag-grid-community/csv-export';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  rowModelType: 'clientSide' | 'infinite' | 'viewport' | 'serverSide' = 'serverSide';
  colConfig = [
    { field: 'recall_number', headerName: 'Security Profile', checkboxSelection: true },
    { field: 'city' },
    { field: 'country'}
	];
  extraConfig = {
    rowModelType: this.rowModelType, 
    serverSideInfiniteScroll:true, 
    pagination: true, 
    paginationPageSize: 10, 
    cacheBlockSize: 10,
    suppressPaginationPanel: true,
    onPaginationChanged: () => this.onPaginationChanged()
  };
  page = 1;
  totalRows!:number;
  public grid:any;
  extraModules = [CsvExportModule, ExcelExportModule];
  public excelFileParams = {
    fileName: 'security_profiles.xlsx'
  }
  public csvFileParams = {
    fileName: 'security_profiles.csv'
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // component initializatoin code will go here
  }

  onGridReadyCB(event:any){
    this.grid = event;
    event.api.setServerSideDatasource(this.dataSource());
  }

  private dataSource(): IServerSideDatasource {
    let vm = this;
    return {
      getRows: (params) => {
        let url = `https://api.fda.gov/food/enforcement.json?limit=10&`;
        //Sorting
        if(params.request.sortModel.length){
          url += `_sort=${params.request.sortModel[0].colId}&_order=${params.request.sortModel[0].sort}&`;
        }
        //Filtering
        const filterKeys = Object.keys(params.request.filterModel);
        filterKeys.forEach((filter) => {
          url += `${filter}=${params.request.filterModel[filter].filter}&`;
        });
        //Pagination
        url += `skip=${params.request.endRow}`;
        console.log(url);
        vm.http.get(url).subscribe(
          (response:any) => {
            this.totalRows = response.meta.results.total;
            params.success({
              rowData: response.results,
              rowCount: response.meta.results.total
            });
          }
        );
      },
    };
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


