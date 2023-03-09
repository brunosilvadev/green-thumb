import { AfterViewInit, Component, ViewChild, ɵɵqueryRefresh } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { Species } from '../../model/Species';
import { ApiService } from '../../services/api.service';
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
  dataSource: SpeciesTableDataSource = new SpeciesTableDataSource();
  data: Species[] = [] as Species[];
  loaded: boolean = false;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name','scientific-name'];

  constructor(private svc: ApiService) {
    this.refresh();
  }

  async refresh() {
    await this.svc.getSpecies().then( species => {
      this.data = species;
      this.loaded = true;
    })
    .catch( err => console.log(err));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
