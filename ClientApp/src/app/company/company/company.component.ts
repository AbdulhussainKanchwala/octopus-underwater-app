import { IServerSideDatasource, ValueFormatterParams } from '@ag-grid-community/core';
import { CsvExportModule } from '@ag-grid-community/csv-export';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  rowModelType: 'clientSide' | 'infinite' | 'viewport' | 'serverSide' = 'serverSide';
  colConfig = [
    { field: 'recalling_firm', headerName: 'Company Name', checkboxSelection: true},
    { field: 'status', headerName: 'Status', valueFormatter: (params: ValueFormatterParams) => {return params.value?.toLowerCase() == 'terminated' ? 'Disabled' : 'Enabled';} }
	];
  grid:any;
  extraConfig = {
    rowModelType: this.rowModelType,
    serverSideInfiniteScroll:true, 
    cacheBlockSize: 10,
    blockLoadDebounceMillis: 1500,
    overlayNoRowsTemplate: `No data found`
  };
  extraModules = [CsvExportModule, ExcelExportModule];
  totalRows:number = 0;
  public excelFileParams = {
    fileName: 'companies.xlsx'
  }
  public csvFileParams = {
    fileName: 'companies.csv'
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // component initializatoin code will go here
  }

  onGridReadyCB(event:any){
    this.grid = event;
    event.api.setServerSideDatasource(this.dataSource());

    event.api.addGlobalListener((type: string, e:any) => {
      if (type === "rowClicked") {
        console.log(e.data);
      }
    });
  }

  private dataSource(): IServerSideDatasource {
    let vm = this;
    return {
      getRows: (params) => {
        let url = `https://api.fda.gov/food/enforcement.json?limit=10&`;
        //Sorting
        if(params.request.sortModel.length){
          url += `sort=${params.request.sortModel[0].colId}:${params.request.sortModel[0].sort}&`;
        }
        //Filtering
        const filterKeys = Object.keys(params.request.filterModel);
        filterKeys.forEach((filter) => {
          url += `search=${filter}:${params.request.filterModel[filter].filter}&`;
        });
        //Pagination
        url += `skip=${params.request.startRow}`;
        console.log(url);
        vm.http.get(url).subscribe(
          (response:any) => {
            this.totalRows = response.meta.results.total;
            params.success({
              rowData: response.results,
              rowCount: undefined
            });
          },
          (error:any) => {
            this.totalRows = 0;
            params.success({
              rowData: [],
              rowCount: 0
            });
            this.grid.api.showNoRowsOverlay();
          }
        );
      },
    };
  }

  deleteSelectedRows(){
    let selectedNodes = this.grid.api.getSelectedNodes();
    let selectedData = selectedNodes.map((node:any) => node.data);
    console.log(selectedData);
  }

}
