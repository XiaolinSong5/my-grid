import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AllCommunityModule, ColDef, GridOptions, ModuleRegistry} from 'ag-grid-community';
import {AgGridAngular} from 'ag-grid-angular';
import {settings} from './settings';
// import {ag-grid-community/styles/ag-grid.css};
//import {ag-grid-community/styles/ag-grid-theme-quartz.css};

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-grid';
  rowData: IRow[] = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  public colDefs: ColDef<IRow>[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  agGridSettings = settings;
  gridOptionsTest: GridOptions = this.agGridSettings;


  // ngOnInit() {
  //   this.gridOptions.columnDefs=this.colDefs;
  // }
  onGridReady(params:any) {
  };

  constructor() {
  }
}
