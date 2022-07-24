import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  url = "";

  constructor(private http: HttpClient) {
    if (isDevMode()) {
      this.url = "http://localhost:3000";
    }
  }
    getData(route: any) {
      let target_url = this.url + '/api' + route
      console.log(target_url);
      return this.http.get(target_url);
    }

    postData(route: string, body: any) {
      return this.http.post(this.url + '/api' + route, body);
    }

    putData(route: string, body: any) {
      return this.http.put(this.url + '/api' + route, body);
    }

    deleteData(route: string) {
      return this.http.delete(this.url + '/api' + route);
    }

}
