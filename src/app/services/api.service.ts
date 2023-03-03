import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Species } from '../model/Species';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUri:string = "https://green-thumb-api.azurewebsites.net/";

  constructor(private client:HttpClient) { }
  async getSpecies()
  {
    return await lastValueFrom(this.client.get<Species>(this.baseUri + "get-species"));
  }}
