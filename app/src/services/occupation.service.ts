import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {

  constructor(private httpClient: HttpClient) { }

  getOccupation() : Observable<any>{
    return this.httpClient.get("assets/mocks/occupation.json");
    //commented for mock service value 
    //return this.httpClient.get("http://localhost:63667/api/Values");
  }

  getRaitings() : Observable<any>{
    return this.httpClient.get("assets/mocks/rating.json");
  }

}
