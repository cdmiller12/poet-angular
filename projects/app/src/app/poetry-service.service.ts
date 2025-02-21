import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoetryServiceService {

  constructor(private http: HttpClient) {}

  
    getPoets(): Observable<any>{
      return this.http.get<any>('https://poetrydb.org/author').pipe(catchError(this.erroHandler));
    }

    getAuthor(name: string): Observable<any>{
      return this.http.get<any>('https://poetrydb.org/author/'+name+"/title").pipe(catchError(this.erroHandler));
    }

    getPoemByAuthor(authorName: string, poemName: string): Observable<any>{
      return this.http.get<any>('https://poetrydb.org/author,title/'+authorName+";"+poemName).pipe(catchError(this.erroHandler));
    }

    erroHandler(error: HttpErrorResponse) {
      return throwError(error.message || 'server Error');
    }

  }
