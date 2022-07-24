import { Injectable, isDevMode } from '@angular/core';
import{ HttpClient , HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  url=""

  constructor(private http: HttpClient) {
    if( isDevMode())
    {
      this.url = "http://localhost:3000";
    }
  }
}
