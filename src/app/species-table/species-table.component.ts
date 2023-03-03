import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Species } from '../model/Species';
import { SpeciesTableDataSource } from './species-table-datasource';

@Component({
  selector: 'app-species-table',
  templateUrl: './species-table.component.html',
  styleUrls: ['./species-table.component.css']
})
export class SpeciesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Species>;
  dataSource: SpeciesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name','scientific-name'];

  constructor() {
    this.dataSource = new SpeciesTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
