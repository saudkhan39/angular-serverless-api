import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  url = 'https://serverless-api.saud2016.workers.dev';

  constructor(private http: HttpClient) { }

  user() {
    return this.http.get(this.url )
  }
  saveuser(data: any) {
    return this.http.post(this.url, {response: 'text'},data);
  }
  


}


