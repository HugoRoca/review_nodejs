import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology.model'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL

  constructor(private readonly _http: HttpClient) {}

  public getTechnologies() {
    return this._http.get<Technology[]>(this.baseUrl + '/technologies')
  }

  public getTechology(id: string) {
    return this._http.get<Technology>(this.baseUrl + '/technology/' + id)
  }

  public searchTechnology(query: string) {
    return this._http.get<Technology[]>(this.baseUrl + '/technology/search/' + query)
  }
}
