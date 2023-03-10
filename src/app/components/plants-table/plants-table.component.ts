import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/model/Species';
import { ApiService } from 'src/app/services/api.service';
import { Plant } from '../../model/Plant'

@Component({
  selector: 'app-plants-table',
  templateUrl: './plants-table.component.html',
  styleUrls: ['./plants-table.component.css']
})
export class PlantsTableComponent implements OnInit {

  loaded:boolean = false;
  plants:Plant[] = [];
  constructor(private svc: ApiService) {
    this.refresh();
  }

  async refresh() {
    await this.svc.listPlants().then( plants => {
      this.plants = plants;
      this.loaded = true;
    })
    .catch( err => console.log(err));
  }

  ngOnInit(): void {
  }

}
