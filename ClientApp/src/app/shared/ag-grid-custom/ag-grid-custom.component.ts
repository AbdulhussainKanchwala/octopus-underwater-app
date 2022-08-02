import { ColDef, DetailGridInfo, GridOptions, Module } from '@ag-grid-community/core';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InfiniteRowModelModule }  from '@ag-grid-community/infinite-row-model';

@Component({
  selector: 'app-ag-grid-custom',
  templateUrl: './ag-grid-custom.component.html',
  styleUrls: ['./ag-grid-custom.component.scss']
})
export class AgGridCustomComponent implements OnInit {

  //inputs required for this components
  @Input() colConfig!: ColDef[];
  @Input() rowData: any;
  @Input() extraModules: Module[] = [];
  @Input() actionFunction  : any;
  @Input() parentComponent?: any;
  @Input() extraConfig?: GridOptions = {};
  @Input() isContainer: boolean = false;

  //output from this component
  @Output() gridApi: EventEmitter<DetailGridInfo> = new EventEmitter<DetailGridInfo>();

  private gridConfig!: GridOptions;
  private modules : Module[] = [ClientSideRowModelModule, MenuModule, InfiniteRowModelModule, ServerSideRowModelModule];

  public generateGridConfig() {
    let vm = this;
    this.gridConfig = {
      defaultColDef: { flex: 1, minWidth: 100, sortable: true, filter: 'agTextColumnFilter', resizable: true, sortingOrder: ["asc", "desc"], menuTabs:[], floatingFilter: true, floatingFilterComponentParams: { suppressFilterButton: true }},
      rowSelection: 'multiple',
      suppressRowClickSelection: true,
      rowDragManaged: true,
      suppressMoveWhenRowDragging: true,
      suppressDragLeaveHidesColumns: true,
      columnDefs: this.colConfig,
      animateRows: true,
      groupSelectsChildren: true,
      groupDefaultExpanded: 1,
      unSortIcon: true,
      context: {actionFunction: this.actionFunction, parentComponent: this.parentComponent},
      suppressContextMenu: true,
      onGridReady
    };

    function onGridReady(params: any) {
      vm.gridApi.emit(params);
    }
  }

  // getter setter for the private Variable
  // so that no other component can overwite
  get agGridConfig() { return  {...this.gridConfig, ...this.extraConfig }; }
  get agGridModules() { return [...this.modules, ...this.extraModules]; }

  constructor() { /* constructor code will go here */ }

  ngOnInit(): void {
    this.generateGridConfig();
  }

}
