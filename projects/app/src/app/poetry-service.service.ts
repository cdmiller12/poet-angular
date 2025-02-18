import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoetryServiceService {

  constructor(private http: HttpClient) {}
  
    getPoets(): Observable<any>{
      return this.http.get<any>('https://poetrydb.org/author');
    }

    getAuthor(name: string): Observable<any>{
      return this.http.get<any>('https://poetrydb.org/author/'+name+"/title")
    }
}
