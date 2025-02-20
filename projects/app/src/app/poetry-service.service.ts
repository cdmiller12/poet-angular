import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoetryServiceService {

  constructor(private http: HttpClient) {}

  public corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'https://turbo-space-doodle-jj7g95wp9x96cpp6v-4300.app.github.dev/*',
    'Access-Control-Request-Headers': '*'
  });
  
    getPoets(): Observable<any>{
      return this.http.get<any>('https://poetrydb.org/author', {headers: this.corsHeaders}).pipe(catchError(this.erroHandler));
    }

    getAuthor(name: string): Observable<any>{
      return this.http.get<any>('https://poetrydb.org/author/'+name+"/title", {headers: this.corsHeaders}).pipe(catchError(this.erroHandler));
    }

    getPoemByAuthor(authorName: string, poemName: string): Observable<any>{
      return this.http.get<any>('https://poetrydb.org/author,title/'+authorName+";"+poemName, {headers: this.corsHeaders}).pipe(catchError(this.erroHandler));
    }

    erroHandler(error: HttpErrorResponse) {
      return throwError(error.message || 'server Error');
    }

  }
